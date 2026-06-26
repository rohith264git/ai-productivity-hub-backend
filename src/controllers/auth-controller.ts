import { AuthService } from "../services/auth-service";

export class AuthController {
  private authService = new AuthService();

  async register(req: any, res: any) {
    try {
      const user = await this.authService.register(req.body);

      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  async login(req: any, res: any) {
    try {
      const response = await this.authService.login(req.body);

      res.json(response);
    } catch (error: any) {
      res.status(401).json({
        message: error.message,
      });
    }
  }
}
