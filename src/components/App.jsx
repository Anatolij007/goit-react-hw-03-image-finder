import { Component } from 'react';
// import PokemonForm from './Pokemon/PokemonForm';
// import PokemonInfo from './Pokemon/PokemonInfo';
// import { ToastContainer } from 'react-toastify';
// import ModalTest from './ModalTest/ModalTest';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    // pokemonName: '',
  };

  // handleFormSubmit = pokemonName => {
  //   this.setState({ pokemonName });
  // };

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <ImageGalleryItem />
        <Loader />
        <Button />
        <Modal />
      </>
    );
  }
}
// ===================================

// export class App extends Component {
//   state = {
//     pokemonName: '',
//   };

//   handleFormSubmit = pokemonName => {
//     this.setState({ pokemonName });
//   };

//   render() {
//     return (
//       <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
//         <PokemonForm onSubmit={this.handleFormSubmit} />
//         <PokemonInfo pokemonName={this.state.pokemonName} />
//       </div>
//     );
//   }
// }

// ===================================
// export class App extends Component {
//   state = {
//     pokemon: null,
//     loading: false,
//   };

//   componentDidMount() {
//     this.setState({ loading: true });
//     setTimeout(() => {
//       fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//         .then(res => res.json())
//         .then(pokemon => this.setState({ pokemon }))
//         .finally(this.setState({ loading: false }));
//     }, 1000);
//   }

//   render() {
//     return (
//       <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
//         {this.state.loading && <h1>Завантажуємо...</h1>}
//         {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
//       </div>
//     );
//   }
// }
// ===================================
// export class App extends Component {
//   state = {
//     showModal: false,
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { showModal } = this.state;
//     return (
//       <div>
//         <button type="button" onClick={this.toggleModal}>
//           Open Modal
//         </button>
//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <h1>тут ерунда</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
//               libero ipsum optio eaque, consequuntur veniam tempore, commodi
//               fugit facere aperiam dolorem, suscipit odit aut vero molestias?
//               Facilis voluptatum quidem voluptas?
//             </p>
//             <button type="button" onClick={this.toggleModal}>
//               Зачинити двері
//             </button>
//           </Modal>
//         )}
//       </div>
//     );
//   }
// }
// onClose={this.toggleModal}
// style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
