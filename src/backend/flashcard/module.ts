import { CardController } from "./controllers/card.controller";
import { CardRoute } from "./routes/card.route";
import { CardService } from "./services/card.service";

export class CardModule {
  private static instance: CardModule;
  private route: CardRoute;
  private controller: CardController;
  private cardService: CardService;

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
    this.cardService = new CardService();
    this.controller = new CardController(this.cardService);
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
