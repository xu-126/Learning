// destructuring iterables
const movies = {
    list: [
      { title: 'Heat' }, 
      { title: 'Interstellar' }
    ],
    [Symbol.iterator]() {
      let index = 0;
      return {
        next: () => {
          if (index < this.list.length) {
            // console.log(index)  // 0
            const value = this.list[index++].title;
            // console.log(index)  // 1
            return { value, done: false };
          }
          return { done: true };
        }
      };
    }
  };
const [firstMovieTitle] = movies;
console.log(firstMovieTitle); // => 'Heat'