import React from "react";
import Header from "@components/Header/Header";
import Slider from "@features/Recommendations/components/Slider/Slider";
import { topMovies, topSeries } from "@services/mockService";
import TopList from "@features/Recommendations/components/TopList/TopList";

const Home = () => {
  return (
    <main>
      <Slider></Slider>
      <TopList title='Highly rated movies' topList={topMovies} />
      <TopList title='Highly rated series' topList={topSeries} />
    </main>
  )
}

export default Home;