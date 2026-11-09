'use strict';const {test}=require('node:test'),assert=require('node:assert/strict'),c=require('../core');const asset={id:'1',name:'Icon',creator:'A',license:'CC BY 4.0',credit:'Icon by A',source:'https://example.org/icon'};
test('required license and source URL are checked',()=>{assert.throws(()=>c.validate({version:1,assets:[{...asset,license:''}]}));assert.throws(()=>c.validate({version:1,assets:[{...asset,source:'javascript:alert(1)'}]}));assert.equal(c.validate({version:1,assets:[asset]}).assets.length,1)});
test('duplicate IDs are rejected',()=>assert.throws(()=>c.validate({version:1,assets:[asset,asset]})));
test('credits include source and attribution',()=>{let s=c.credits([asset]);assert.match(s,/Icon by A/);assert.match(s,/https:\/\/example.org/);assert.match(s,/CC BY 4.0/)});
