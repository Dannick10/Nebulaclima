"use client";
import { motion } from "framer-motion";
import ExebitionWeather from "@/components/ExebitionWeather";
import Layout from "@/components/Layout";
import Skeleton from "@/components/Skeleton";
import useGetLocaleAPI from "@/services/useGetLocaleAPI";
import { ChangeEvent, useEffect, useState } from "react";
import InputComponent from "@/components/InputComponent";
import {
  GithubIcon,
  LinkedinIcon,
  RotateIcon,
  SearchIcon,
} from "@/icons/Icons";
import useGetCityApi from "@/services/useGetCityAPI";
import SelectComponent from "@/components/SelectComponent";
import ChooseTheme from "@/components/ChooseTheme";
import Link from "next/link";

export default function Home() {
  const { data, error, fetchData, weather, city, SetCity, loading } =
    useGetLocaleAPI();

  const themes: string[] = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  const [theme, SetTheme] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("themeWeather");
      if (storedTheme) {
        SetTheme(storedTheme);
      }
    }
  }, []);

  const [tipSearch, SettipSearch] = useState<"input" | "select">("input");

  const {
    fetchDataUF,
    fetchDataSigla,
    municipio,
    states,
    loading: loadingcity,
    error: errorCity,
  } = useGetCityApi();

  const handleCityChange = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
    fetchDataUF();
    SetCity(localStorage.getItem("cityWeather") ?? "");
  }, []);

  const changeSelect = (e: ChangeEvent<HTMLInputElement>) => {
    SetCity(e.target.value);
    fetchDataSigla(e.target.value);
  };

  const changeWeather = (e: ChangeEvent<HTMLInputElement>) => {
    SetCity(e.target.value);
    fetchDataSigla(city);
  };

  const changeTheme = (e: any) => {
    SetTheme(e.target.value);
    localStorage.setItem("themeWeather", e.target.value);
  };

  return (
    <div data-theme={theme} className="transition-all delay-150 p-2">
      <div className="flex gap-3 my-1">
        {tipSearch == "input" ? (
          <motion.div
            initial={{ scale: 0, rotate: 10 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="flex-1"
          >
            <InputComponent
              placehold=""
              target={(e) => SetCity(e.target.value)}
              value={city}
            />
          </motion.div>
        ) : (
          <>
            <motion.div
              initial={{ scale: 0, rotate: 10 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="flex-1"
            >
              <SelectComponent
                state={states}
                text={"Escolha o estado"}
                onChange={changeSelect}
                type="estado"
              />
            </motion.div>

            <motion.div
              initial={{ scale: 0, rotate: 10 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.3,
              }}
              className="flex-1"
            >
              <SelectComponent
                state={municipio}
                text={"Escolha a cidade"}
                type="municipio"
                onChange={changeWeather}
              />
            </motion.div>
          </>
        )}

        <motion.button
          className="btn btn-square"
          onClick={handleCityChange}
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
        >
          <SearchIcon />
        </motion.button>
        <motion.button
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
          className="btn btn-square"
          onClick={() =>
            SettipSearch(tipSearch == "input" ? "select" : "input")
          }
        >
          <RotateIcon />
        </motion.button>
        <ChooseTheme themes={themes} theme={theme} onChange={changeTheme} />
      </div>
      <Layout>
        {!loading ? <ExebitionWeather weather={weather} /> : <Skeleton />}
      </Layout>
        <div className="flex justify-center items-center py-2 gap-2">
          <Link href={"https://github.com/Dannick10"} target="_blank">
            <motion.button
              initial={{ opacity: 0.6 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              whileInView={{ opacity: 1 }}
              className="btn btn-square"
            >
              <GithubIcon />
            </motion.button>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/futurodevdaniel/"}
            target="_blank"
          >
            <motion.button
              initial={{ opacity: 0.6 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              whileInView={{ opacity: 1 }}
              className="btn btn-square"
            >
              <LinkedinIcon />
            </motion.button>
          </Link>
        </div>
    </div>
  );
}
