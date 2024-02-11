/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Title {
  title: string;
}
class Component<P> {
  constructor(public props: P) {}
}

class Page extends Component<Title> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};