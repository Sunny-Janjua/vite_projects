import User from "../schema/sehema.js";
import bcrypt from "bcryptjs";

// Controller for rendering the home page
export const homeController = (req, res) => {
    res.render("home");
};

// Controller for rendering the signup page
export const signupPageController = (req, res) => {
    res.render("signup");
};

// Controller for handling signup logic
export const signupController = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User with this email already exists.");
        }

        // Create a new user
        const newUser = new User({
            name,
            email,
            password,
        });

        // Save user to database
        await newUser.save();

        // Redirect to login page after successful signup
        res.redirect("/login");
    } catch (error) {
        console.error("Error during signup:", error.message);
        res.status(500).send("An error occurred during signup.");
    }
};

// Controller for rendering the login page
export const loginPageController = (req, res) => {
    res.render("login");
};

// Controller for handling login logic
export const loginController = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send("Invalid email or password.");
        }

        // Compare the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send("Invalid email or password.");
        }

        // Redirect to home page upon successful login
        res.redirect("/");
    } catch (error) {
        console.error("Error during login:", error.message);
        res.status(500).send("An error occurred during login.");
    }
};
