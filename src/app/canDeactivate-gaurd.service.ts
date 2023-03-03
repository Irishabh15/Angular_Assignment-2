import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { CreateProductComponent } from "./create-product/create-product.component";
import { QuickCreateProductComponent } from "./quick-create-product/quick-create-product.component";

export class CanDeactivateGaurdService implements CanDeactivate<CreateProductComponent>{
    canDeactivate(component: CreateProductComponent, activatedroute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot){
        return component.canSwitch();
    }
} 