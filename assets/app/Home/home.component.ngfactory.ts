/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './home.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../public/stylesheets/home.css.shim';
import * as import11 from '@angular/router/src/directives/router_link';
import * as import12 from '@angular/router/src/router';
import * as import13 from '@angular/router/src/router_state';
import * as import14 from '@angular/common/src/location/location_strategy';
import * as import15 from '@angular/core/src/security';
var renderType_HomeComponent_Host:import0.RenderComponentType = (null as any);
class _View_HomeComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _HomeComponent_0_4:import3.HomeComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_HomeComponent_Host0,renderType_HomeComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('home-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HomeComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HomeComponent_0_4 = new import3.HomeComponent();
    this._appEl_0.initComponent(this._HomeComponent_0_4,[],compView_0);
    compView_0.create(this._HomeComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.HomeComponent) && (0 === requestNodeIndex))) { return this._HomeComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._HomeComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_HomeComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_HomeComponent_Host === (null as any))) { (renderType_HomeComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_HomeComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const HomeComponentNgFactory:import9.ComponentFactory<import3.HomeComponent> = new import9.ComponentFactory<import3.HomeComponent>('home-component',viewFactory_HomeComponent_Host0,import3.HomeComponent);
const styles_HomeComponent:any[] = [import10.styles];
var renderType_HomeComponent:import0.RenderComponentType = (null as any);
class _View_HomeComponent0 extends import1.AppView<import3.HomeComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _el_27:any;
  _text_28:any;
  _text_29:any;
  _el_30:any;
  _text_31:any;
  _text_32:any;
  _el_33:any;
  _el_34:any;
  _RouterLinkWithHref_34_3:import11.RouterLinkWithHref;
  _text_35:any;
  _text_36:any;
  _text_37:any;
  _text_38:any;
  _text_39:any;
  _arr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_HomeComponent0,renderType_HomeComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','customBody');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','loaded');
    this._text_3 = this.renderer.createText(this._el_2,'   \n    ',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n\n    ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','container');
    this._text_6 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_5,'div',(null as any));
    this.renderer.setElementAttribute(this._el_7,'class','row');
    this._text_8 = this.renderer.createText(this._el_7,'\n            ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_7,'div',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','col-md-12');
    this._text_10 = this.renderer.createText(this._el_9,'\n                ',(null as any));
    this._el_11 = this.renderer.createElement(this._el_9,'img',(null as any));
    this.renderer.setElementAttribute(this._el_11,'class','logoImage');
    this.renderer.setElementAttribute(this._el_11,'src','../../../images/logo.png');
    this._text_12 = this.renderer.createText(this._el_9,'\n                ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_9,'header',(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'We\'re coming soon!!',(null as any));
    this._text_15 = this.renderer.createText(this._el_9,'\n                ',(null as any));
    this._el_16 = this.renderer.createElement(this._el_9,'p',(null as any));
    this.renderer.setElementAttribute(this._el_16,'class','ComingSoonText');
    this._text_17 = this.renderer.createText(this._el_16,'\n                    We are working very hard on the new version of our site.',(null as any));
    this._el_18 = this.renderer.createElement(this._el_16,'br',(null as any));
    this._text_19 = this.renderer.createText(this._el_16,'\n                    It will bring a lot of new features. Stay Tuned!!\n                ',(null as any));
    this._text_20 = this.renderer.createText(this._el_9,'\n            ',(null as any));
    this._text_21 = this.renderer.createText(this._el_7,'\n        ',(null as any));
    this._text_22 = this.renderer.createText(this._el_5,'\n\n        ',(null as any));
    this._el_23 = this.renderer.createElement(this._el_5,'div',(null as any));
    this.renderer.setElementAttribute(this._el_23,'class','row');
    this._text_24 = this.renderer.createText(this._el_23,'\n            ',(null as any));
    this._el_25 = this.renderer.createElement(this._el_23,'section',(null as any));
    this.renderer.setElementAttribute(this._el_25,'class','col-md-7 col-md-offset-2');
    this._text_26 = this.renderer.createText(this._el_25,'\n                ',(null as any));
    this._el_27 = this.renderer.createElement(this._el_25,'h2',(null as any));
    this._text_28 = this.renderer.createText(this._el_27,'We are hiring CAMPUS AMBASSADORS.',(null as any));
    this._text_29 = this.renderer.createText(this._el_25,'\n                ',(null as any));
    this._el_30 = this.renderer.createElement(this._el_25,'h4',(null as any));
    this._text_31 = this.renderer.createText(this._el_30,'Register and become the representative of MECHANICA in your college/region',(null as any));
    this._text_32 = this.renderer.createText(this._el_25,'\n                ',(null as any));
    this._el_33 = this.renderer.createElement(this._el_25,'h4',(null as any));
    this._el_34 = this.renderer.createElement(this._el_33,'a',(null as any));
    this._RouterLinkWithHref_34_3 = new import11.RouterLinkWithHref(this.parentInjector.get(import12.Router),this.parentInjector.get(import13.ActivatedRoute),this.parentInjector.get(import14.LocationStrategy));
    this._text_35 = this.renderer.createText(this._el_34,'HTTP://www.mechanica.org.in/ca',(null as any));
    this._text_36 = this.renderer.createText(this._el_25,'\n            ',(null as any));
    this._text_37 = this.renderer.createText(this._el_23,'\n        ',(null as any));
    this._text_38 = this.renderer.createText(this._el_5,'\n    ',(null as any));
    this._text_39 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_34,'click',this.eventHandler(this._handle_click_34_0.bind(this)));
    this._arr_0 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._text_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._el_27,
      this._text_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._text_32,
      this._el_33,
      this._el_34,
      this._text_35,
      this._text_36,
      this._text_37,
      this._text_38,
      this._text_39
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.RouterLinkWithHref) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 35)))) { return this._RouterLinkWithHref_34_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = this._arr_0('/ca');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLinkWithHref_34_3.routerLink = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_34_3.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_2:any = this._RouterLinkWithHref_34_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_34,'href',this.viewUtils.sanitizer.sanitize(import15.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_34_3.ngOnDestroy();
  }
  private _handle_click_34_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_34_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_HomeComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.HomeComponent> {
  if ((renderType_HomeComponent === (null as any))) { (renderType_HomeComponent = viewUtils.createRenderComponentType('C:/Users/Shiv Tavker/Documents/Mechanica Final/assets/app/Home/home.html',0,import8.ViewEncapsulation.Emulated,styles_HomeComponent,{})); }
  return new _View_HomeComponent0(viewUtils,parentInjector,declarationEl);
}