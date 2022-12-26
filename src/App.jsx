import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home/Home';
import NewPost from './pages/NewPost/NewPost';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Edit from './pages/Edit/Edit';
import MyList from './pages/MyList/MyList';
import Agreement from './pages/Agreement/Agreement';
import Post from './pages/Post/Post';
import GlobalStyle from './GlobalStyle';
import Theme from './Theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
