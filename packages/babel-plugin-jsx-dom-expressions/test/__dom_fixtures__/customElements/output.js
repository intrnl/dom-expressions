import { template as _$template } from "r-dom";
import { effect as _$effect } from "r-dom";
import { getOwner as _$getOwner } from "r-dom";
import { setAttribute as _$setAttribute } from "r-dom";
const _tmpl$ = /*#__PURE__*/ _$template(`<my-element>`, true, false),
  _tmpl$2 = /*#__PURE__*/ _$template(`<my-element><header slot=head>Title`, true, false),
  _tmpl$3 = /*#__PURE__*/ _$template(`<slot name=head>`);
const template = (() => {
  const _el$ = _tmpl$();
  _el$.someAttr = name;
  _el$.notprop = data;
  _$setAttribute(_el$, "my-attr", data);
  _el$.someProp = data;
  _el$._$owner = _$getOwner();
  return _el$;
})();
const template2 = (() => {
  const _el$2 = _tmpl$();
  _el$2._$owner = _$getOwner();
  _$effect(
    _p$ => {
      const _v$ = state.name,
        _v$2 = state.data,
        _v$3 = state.data,
        _v$4 = state.data;
      _v$ !== _p$.a && (_el$2.someAttr = _p$.a = _v$);
      _v$2 !== _p$.b && (_el$2.notprop = _p$.b = _v$2);
      _v$3 !== _p$.c && _$setAttribute(_el$2, "my-attr", (_p$.c = _v$3));
      _v$4 !== _p$.d && (_el$2.someProp = _p$.d = _v$4);
      return _p$;
    },
    {
      a: undefined,
      b: undefined,
      c: undefined,
      d: undefined
    }
  );
  return _el$2;
})();
const template3 = (() => {
  const _el$3 = _tmpl$2();
  _el$3._$owner = _$getOwner();
  return _el$3;
})();
const template4 = (() => {
  const _el$4 = _tmpl$3();
  _el$4._$owner = _$getOwner();
  return _el$4;
})();
