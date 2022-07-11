import axios from "axios";

export const getbook = async (query) => {
  try {
    const url =
      await fetch("https://www.googleapis.com/books/v1/volumes?q=建築");
    const book = await url.json();
    // let items = book.items.map(item => {
    //   let vi = item.volumeInfo;
    //   return {
    //     title: vi.title,
    //     description: vi.description,
    //     link: vi.infoLink,
    //     image: vi.imageLinks ? vi.imageLinks.smallThumbnail : '',
    //   };
    // });
    return book;
  } catch (e) {
    throw Error("Error while getting book.");
  }
};