import k from "./Kaboom";

k.loadBean();

const bean = k.add([
  k.sprite("bean"),
  k.pos(k.width() / 2, k.height() / 2),
  k.anchor("center"),
]);
