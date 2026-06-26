import bcrypt from "bcryptjs";
import User from "../models/user.model";
import jwt from "jsonwebtoken";

export class AuthService {
  async register(user: any) {
    const existingUser = await User.findOne({
      email: user.email,
    });

    if (existingUser) {
      throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUser = await User.create({
      ...user,

      password: hashedPassword,
    });

    return {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    };
  }

  async login(user: any) {
    const existingUser = await User.findOne({
      email: user.email,
    });

    if (!existingUser) {
      throw new Error("Invalid email or password");
    }

    const passwordMatched = await bcrypt.compare(
      user.password,

      existingUser.password,
    );

    if (!passwordMatched) {
      throw new Error("Invalid email or password");
    }

    const token = jwt.sign(
      {
        userId: existingUser._id,
      },

      process.env.JWT_SECRET as string,

      {
        expiresIn: "1d",
      },
    );

    return {
      token,

      user: {
        _id: existingUser._id,

        name: existingUser.name,

        email: existingUser.email,
      },
    };
  }
}
