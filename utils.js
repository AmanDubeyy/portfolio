"use server"

import axios from 'axios';
import logger from "./logger";

export default async function apiClient(endpointName) {
  console.log(endpointName);
    const headers = {
        'X-Request-Droom': 1,
        'X-Request-Platform': 'web',
        'X-Request-Device': 'your_device',
        'X-Request-Client': 'your_device_client'
    };
    const timer = {
        start: 0,
        end: 0,
        duration: 0
    };
    try {
        axios.interceptors.request.use(function (config) {
            timer.start = Date.now();
            return config;
        });

        axios.interceptors.response.use(function (response) {
            timer.end = Date.now();
            timer.duration = timer.end - timer.start;

            return response;
        });

        const d = new Date();
        const response = await axios.get(endpointName);

        //--requesturl => response.config.url

        axios.interceptors.request.eject();
        axios.interceptors.response.eject();

        return {
            data: response.data,
            effectiveUrl: response.request.responseURL
        };
    
    } catch (error) {
        throw new Error(`Error while calling API ${endpointName}: ${error.message}`);
    }
}