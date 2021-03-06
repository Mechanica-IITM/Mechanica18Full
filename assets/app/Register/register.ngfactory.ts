/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './register';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './register.css.shim';
var renderType_RegisterComponent_Host:import0.RenderComponentType = (null as any);
class _View_RegisterComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _RegisterComponent_0_4:import3.RegisterComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_RegisterComponent_Host0,renderType_RegisterComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('form-register',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_RegisterComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._RegisterComponent_0_4 = new import3.RegisterComponent();
    this._appEl_0.initComponent(this._RegisterComponent_0_4,[],compView_0);
    compView_0.create(this._RegisterComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.RegisterComponent) && (0 === requestNodeIndex))) { return this._RegisterComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_RegisterComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_RegisterComponent_Host === (null as any))) { (renderType_RegisterComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_RegisterComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const RegisterComponentNgFactory:import9.ComponentFactory<import3.RegisterComponent> = new import9.ComponentFactory<import3.RegisterComponent>('form-register',viewFactory_RegisterComponent_Host0,import3.RegisterComponent);
const styles_RegisterComponent:any[] = [import10.styles];
var renderType_RegisterComponent:import0.RenderComponentType = (null as any);
class _View_RegisterComponent0 extends import1.AppView<import3.RegisterComponent> {
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
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  _el_33:any;
  _text_34:any;
  _text_35:any;
  _el_36:any;
  _text_37:any;
  _text_38:any;
  _el_39:any;
  _text_40:any;
  _el_41:any;
  _text_42:any;
  _text_43:any;
  _el_44:any;
  _text_45:any;
  _text_46:any;
  _el_47:any;
  _text_48:any;
  _el_49:any;
  _text_50:any;
  _text_51:any;
  _el_52:any;
  _text_53:any;
  _text_54:any;
  _el_55:any;
  _text_56:any;
  _text_57:any;
  _text_58:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_RegisterComponent0,renderType_RegisterComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','container');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'h2',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'Registration Form',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    \n        ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'form',(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_5,'div',(null as any));
    this.renderer.setElementAttribute(this._el_7,'class','field');
    this._text_8 = this.renderer.createText(this._el_7,'\n                ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_7,'label',(null as any));
    this.renderer.setElementAttribute(this._el_9,'for','Name');
    this._text_10 = this.renderer.createText(this._el_9,'Name:',(null as any));
    this._text_11 = this.renderer.createText(this._el_7,'\n                ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_7,'input',(null as any));
    this.renderer.setElementAttribute(this._el_12,'class','textbox');
    this.renderer.setElementAttribute(this._el_12,'placeholder','e.g. Tyrion Lannister');
    this.renderer.setElementAttribute(this._el_12,'type','text');
    this._text_13 = this.renderer.createText(this._el_7,'\n            ',(null as any));
    this._text_14 = this.renderer.createText(this._el_5,'\n\n            ',(null as any));
    this._el_15 = this.renderer.createElement(this._el_5,'div',(null as any));
    this.renderer.setElementAttribute(this._el_15,'class','field');
    this._text_16 = this.renderer.createText(this._el_15,'\n                ',(null as any));
    this._el_17 = this.renderer.createElement(this._el_15,'label',(null as any));
    this.renderer.setElementAttribute(this._el_17,'for','Email');
    this._text_18 = this.renderer.createText(this._el_17,'Email:',(null as any));
    this._text_19 = this.renderer.createText(this._el_15,'\n                ',(null as any));
    this._el_20 = this.renderer.createElement(this._el_15,'input',(null as any));
    this.renderer.setElementAttribute(this._el_20,'class','textbox');
    this.renderer.setElementAttribute(this._el_20,'placeholder','e.g. tyrion@got.com');
    this.renderer.setElementAttribute(this._el_20,'type','text');
    this._text_21 = this.renderer.createText(this._el_15,'\n            ',(null as any));
    this._text_22 = this.renderer.createText(this._el_5,'\n\n            ',(null as any));
    this._el_23 = this.renderer.createElement(this._el_5,'div',(null as any));
    this.renderer.setElementAttribute(this._el_23,'class','field');
    this._text_24 = this.renderer.createText(this._el_23,'\n                ',(null as any));
    this._el_25 = this.renderer.createElement(this._el_23,'label',(null as any));
    this.renderer.setElementAttribute(this._el_25,'for','Password');
    this._text_26 = this.renderer.createText(this._el_25,'Password:',(null as any));
    this._text_27 = this.renderer.createText(this._el_23,'\n                ',(null as any));
    this._el_28 = this.renderer.createElement(this._el_23,'input',(null as any));
    this.renderer.setElementAttribute(this._el_28,'class','textbox');
    this.renderer.setElementAttribute(this._el_28,'type','password');
    this._text_29 = this.renderer.createText(this._el_23,'\n            ',(null as any));
    this._text_30 = this.renderer.createText(this._el_5,'\n\n            ',(null as any));
    this._el_31 = this.renderer.createElement(this._el_5,'div',(null as any));
    this.renderer.setElementAttribute(this._el_31,'class','field');
    this._text_32 = this.renderer.createText(this._el_31,'\n                ',(null as any));
    this._el_33 = this.renderer.createElement(this._el_31,'label',(null as any));
    this.renderer.setElementAttribute(this._el_33,'for','Confirm Password');
    this._text_34 = this.renderer.createText(this._el_33,'Confirm Password:',(null as any));
    this._text_35 = this.renderer.createText(this._el_31,'\n                ',(null as any));
    this._el_36 = this.renderer.createElement(this._el_31,'input',(null as any));
    this.renderer.setElementAttribute(this._el_36,'class','textbox');
    this.renderer.setElementAttribute(this._el_36,'type','password');
    this._text_37 = this.renderer.createText(this._el_31,'\n            ',(null as any));
    this._text_38 = this.renderer.createText(this._el_5,'\n\n            ',(null as any));
    this._el_39 = this.renderer.createElement(this._el_5,'div',(null as any));
    this.renderer.setElementAttribute(this._el_39,'class','field');
    this._text_40 = this.renderer.createText(this._el_39,'\n                ',(null as any));
    this._el_41 = this.renderer.createElement(this._el_39,'label',(null as any));
    this.renderer.setElementAttribute(this._el_41,'for','College');
    this._text_42 = this.renderer.createText(this._el_41,'College:',(null as any));
    this._text_43 = this.renderer.createText(this._el_39,'\n                ',(null as any));
    this._el_44 = this.renderer.createElement(this._el_39,'input',(null as any));
    this.renderer.setElementAttribute(this._el_44,'class','textbox');
    this.renderer.setElementAttribute(this._el_44,'placeholder','e.g. IIT Madras');
    this.renderer.setElementAttribute(this._el_44,'type','text');
    this._text_45 = this.renderer.createText(this._el_39,'\n            ',(null as any));
    this._text_46 = this.renderer.createText(this._el_5,'\n\n            ',(null as any));
    this._el_47 = this.renderer.createElement(this._el_5,'div',(null as any));
    this.renderer.setElementAttribute(this._el_47,'class','field');
    this._text_48 = this.renderer.createText(this._el_47,'\n                ',(null as any));
    this._el_49 = this.renderer.createElement(this._el_47,'label',(null as any));
    this.renderer.setElementAttribute(this._el_49,'for','Rollno');
    this._text_50 = this.renderer.createText(this._el_49,'Roll NO:',(null as any));
    this._text_51 = this.renderer.createText(this._el_47,'\n                ',(null as any));
    this._el_52 = this.renderer.createElement(this._el_47,'input',(null as any));
    this.renderer.setElementAttribute(this._el_52,'class','textbox');
    this.renderer.setElementAttribute(this._el_52,'placeholder','e.g. ME16B128');
    this.renderer.setElementAttribute(this._el_52,'type','text');
    this._text_53 = this.renderer.createText(this._el_47,'\n            ',(null as any));
    this._text_54 = this.renderer.createText(this._el_5,'\n\n            ',(null as any));
    this._el_55 = this.renderer.createElement(this._el_5,'button',(null as any));
    this.renderer.setElementAttribute(this._el_55,'class','myButton');
    this.renderer.setElementAttribute(this._el_55,'type','submit');
    this._text_56 = this.renderer.createText(this._el_55,'Submit',(null as any));
    this._text_57 = this.renderer.createText(this._el_5,'\n\n        ',(null as any));
    this._text_58 = this.renderer.createText(this._el_0,'\n',(null as any));
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
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._text_38,
      this._el_39,
      this._text_40,
      this._el_41,
      this._text_42,
      this._text_43,
      this._el_44,
      this._text_45,
      this._text_46,
      this._el_47,
      this._text_48,
      this._el_49,
      this._text_50,
      this._text_51,
      this._el_52,
      this._text_53,
      this._text_54,
      this._el_55,
      this._text_56,
      this._text_57,
      this._text_58
    ]
    ,[],[]);
    return (null as any);
  }
}
export function viewFactory_RegisterComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.RegisterComponent> {
  if ((renderType_RegisterComponent === (null as any))) { (renderType_RegisterComponent = viewUtils.createRenderComponentType('C:/Users/Shiv Tavker/Documents/Mechanica Final/assets/app/Register/register.html',0,import8.ViewEncapsulation.Emulated,styles_RegisterComponent,{})); }
  return new _View_RegisterComponent0(viewUtils,parentInjector,declarationEl);
}