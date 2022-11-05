// import * as React from 'react';

// interface IInputImgProps {
//   title: string;
//   type: string;
//   id: string;
//   className: Array<string>;
//   accept: string;
//   reff: (a: HTMLInputElement) => void;
//   callback: (src: string) => void;
// }
// interface IInputImgState {
//   selectedImage: File | null;
// }
// class InputImgComponent extends React.Component<IInputImgProps, IInputImgState> {
//   constructor(props: IInputImgProps) {
//     super(props);
//     this.state = {
//       selectedImage: null,
//     };
//   }

//   setSelectedImage = (event: HTMLInputElement) =>
//     this.setState({
//       selectedImage: event.target.files[0],
//     });

//   render() {
//     return (
//       <label className={this.props.className[0]} htmlFor={this.props.id}>
//         {this.props.title}
//         <div className="form-img__btn">add</div>
//         <input
//           type={this.props.type}
//           id={this.props.id}
//           name={this.props.id}
//           className={this.props.className[1]}
//           onChange={(event) => {
//             const el = event.target as HTMLInputElement;
//             const file = (el.files as FileList)[0];
//             const src = URL.createObjectURL(file);
//             console.log('image=', src);
//             this.props.callback(src);
//             this.setState({
//               selectedImage: (el.files as FileList)[0],
//             });
//           }}
//           ref={this.props.reff}
//         />
//       </label>
//     );
//   }
// }

// export default InputImgComponent;
