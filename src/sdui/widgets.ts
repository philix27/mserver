import { Widget } from "."

const widgets = ["ww", "33", "ope"] as const

interface A { }
interface B { }

type C = A & B

export class Container { constructor(props: { height?: number, width?: number, child?: Widget, }) { } }
export class ListTile { }
export class Row { constructor(props: { children?: Widget[], }) { } }
export class Column { constructor(props: { children?: Widget[], }) { } }
export class AppBar { constructor(props: { title: string }) { } }
export class Scaffold { constructor(props: { appBar?: AppBar, body?: Widget, }) { } }
export class SizedBox { constructor(props: { height?: number, width?: number, child?: Widget, }) { } }
export class Drawer { }
export class IconButton { }
export class ElevatedButton { }


// const payload = {
//     home: new Scaffold({ appBar: new AppBar() })
// }