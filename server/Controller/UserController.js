const UserModel=require("../Model/UserModel.js");


exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await UserModel.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the provided password matches the stored password
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Check if the user is a site admin
    if (user.isSiteAdmin) {
      return res.json({ message: 'Admin login successful',user:user });
    }

    // For regular user login
    return res.json({ message: 'User login successful',user:user });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


exports.register = async (req, res) => {
  const { name, email, phonenumber, password } = req.body;
  console.log(name,email,phonenumber,password);
  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    const newUser = new UserModel({
      name,
      email,
      phonenumber,
      password,
    });

    await newUser.save();

    return res.status(201).json({ message: 'Registration successful',user:newUser });

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.adminRegister = async (req, res) => {
    const { name, email, password, phonenumber } = req.body;
  
    try {
      const existingAdmin = await UserModel.findOne({ email, isAdmin: true });
  
      if (existingAdmin) {
        return res.status(400).json({ message: 'Admin with this email already exists' });
      }
  
      const newAdmin = new UserModel({
        name,
        email,
        password,
        phonenumber,
        isAdmin: true,
      });
  
      await newAdmin.save();
  
      return res.status(201).json({ message: 'Admin registration successful',admin:newAdmin });
  
    } catch (error) {
      console.error('Admin Registration error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  exports.adminLogin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const admin = await UserModel.findOne({ email, isAdmin: true });
  
      if (!admin || admin.password !== password) {
        return res.status(401).json({ message: 'Invalid admin credentials' });
      }
  
      return res.json({ message: 'Admin login successful',admin:admin });
  
    } catch (error) {
      console.error('Admin Login error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  