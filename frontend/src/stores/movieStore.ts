import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movieStore', {
    state: () => ({
        movies: [] as any[],
        searchQuery: ''
    }),
    actions: {
        async fetchMovies() {
            try {
                const response = await fetch('http://localhost:3001/api/movies')
                const result = await response.json()
                console.log('ch000', result);
                this.movies = result.movies;
            } catch (error) {
                console.error('Error fetching movies:', error)
            }
        },
        searchMovies() {
            if (this.searchQuery === '') {
                return this.movies
            } else {
                return this.movies.filter((movie: any) => {
                    return movie.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                        (movie.director && movie.director.toLowerCase().includes(this.searchQuery.toLowerCase()))
                })
            }
        }
    },
    // 计算属性
    getters: {
        // 获取过滤后的电影列表
        displayedMovies(): any[] {
            return this.searchMovies()
        }
    }
})