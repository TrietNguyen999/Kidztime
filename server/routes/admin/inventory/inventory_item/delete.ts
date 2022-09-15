import { controller, Request, Response } from "@kidztime/middlewares";
import SvInventory from "@kidztime/services/inventory";

export default controller(async (req: Request, res: Response) => {
  const { inventory_item, self } = req.extras!;

  await SvInventory.delete_inventory_item({ inventory_item, actor_id: self.id }, { ip_address: req.attr?.ip });

  res.result = {};
});
