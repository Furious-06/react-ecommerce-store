import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { useStore } from './store';
import './index.scss';
import { Product } from './scene/product/product';
import Container from './components/Container';
import { Loading } from './components/Loading';


const App = () => {
  return (
    <Suspense fallback={<Loading />}> 
    <Container>
      <Product />
    </Container>
    </Suspense>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
