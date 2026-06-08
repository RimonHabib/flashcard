import { CardController } from "./controllers/card.controller";
import { CardRoute } from "./routes/card.route";

export class CardModule {
  private static instance: CardModule;
  private route: CardRoute;
  private controller: CardController;
  private providers: {};

  private constructor() {
    this.resolve();
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new CardModule();
    }
    return this.instance;
  }

  private resolve() {
    this.controller = new CardController();
    this.route = new CardRoute(this.controller);
  }

  getRootPath() {
    return this.route.rootPath;
  }

  getRoutes() {
    return this.route.routes();
  }

  getController() {
    return this.controller;
  }
}
