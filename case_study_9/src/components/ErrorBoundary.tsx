// import  { Component } from "react";
// import type { ReactNode } from "react";

// interface Props {
//   children: ReactNode;
// }

// interface State {
//   hasError: boolean;
// }

// export default class ErrorBoundary extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(): State {
//     return { hasError: true };
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h2>Something went wrong while loading.</h2>;
//     }

//     return this.props.children;
//   }
// }