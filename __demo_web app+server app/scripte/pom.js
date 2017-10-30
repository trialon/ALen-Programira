var o_ractive = new Ractive({
  el:'#app',
  template: '#template',
  data:{
      s_var:'Alen je spor',
      s_var1:'se trudi',
      s_boja: 'blue'
  }
});
o_ractive.set('s_boja','green');

console.log(o_ractive.get('s_var'));
