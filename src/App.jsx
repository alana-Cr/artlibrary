
import '@/css/App.css';
import { HashRouter, Routes, Route } from 'react-router';
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import Layout from './components/Layout.jsx';
import GalleryPage from './components/pages/GalleryPage.jsx';
import ArtPages from '@/data/ArtPages.json';
import Contact from './components/pages/Contact.jsx';
import GradientBlob from './components/GradientBlob.jsx';
import NoMatch from './components/pages/NoMatch.jsx';

function App() {
  const artData = ArtPages.collections;
  return <>
    <GradientBlob />
    <div className="content-wrapper">
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          {artData.map((collection) => {
            return <Route 
              key={collection.collectionTitle} 
              path={`/gallery/${collection.slug}`} 
              element={<GalleryPage collection={collection} />} />
          })}
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
          </Route>
      </Routes>
    </HashRouter>
    </div>
  </>
}

export default App
