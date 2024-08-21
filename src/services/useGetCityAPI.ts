"use client";
import { useState } from "react";
import axios from "axios";
import { municipio, state } from "@/types/State";

export default function useGetCityApi() {
  const [states, SetStates] = useState<state[]>([]);
  const [municipio, Setmunipio] = useState<municipio[]>([]);
  const [error, SetError] = useState();
  const [loading, Setloading] = useState();

  const fetchDataUF = async () => {
    const link = `https://brasilapi.com.br/api/ibge/uf/v1`;

    try {
      const response = await axios.get(link);
      SetStates(response.data);
    } catch (error: any) {
      SetError(error);
    }
  };

  const fetchDataSigla = async (siglaUF: string) => {
    const link = `https://brasilapi.com.br/api/ibge/municipios/v1/${siglaUF}?providers=dados-abertos-br,gov,wikipedia`;

    try {
      const response = await axios.get(link);
      Setmunipio(response.data);
    } catch (error: any) {
      SetError(error);
    }
  };

  return {
    fetchDataUF,
    fetchDataSigla,
    states,
    municipio,
    loading,
    error,
  };
}
