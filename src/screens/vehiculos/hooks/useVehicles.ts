import { useCallback, useEffect, useState } from "react";
import client from "../../../api/client";

export interface Vehiculo {
    id: number;
    marca: string;
    modelo: string;
    anio: number;
    color: string;
    placa: string;
    kilometraje: number | string;
}

export const useVehiculos = () => {

  const [data, setData] = useState<Vehiculo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);

    const fetchVehiculos = useCallback(async () => {
        try {
            setLoading(true);
            const response = await client.get<Vehiculo[]>("/vehicles/");
            setData(response.data);
            setError(null);
        } catch (err: unknown) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchVehiculos().catch(() => undefined);
    }, [fetchVehiculos]);

    return { data, loading, error, refresh: fetchVehiculos };
}