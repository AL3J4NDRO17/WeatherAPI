import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View, ImageBackground } from 'react-native';

import { WeatherInfo } from './components/api';
import { styles } from "./components/estilos";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async () => {
    try {
      const response = await fetch('http://api.weatherapi.com/v1/current.json?key=a6db6214fc9c42d1950191808231010&q=Huejutla,es&aqi=no');
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <ImageBackground
      source={require('./assets/cielo-fondo-videoconferencia_23-2148639325.avif')}
      style={styles.backgroundImage}
      resizeMode="cover" // Ajuste para cubrir todo el área sin distorsión
    >
      <ScrollView contentContainerStyle={styles.apiContainer}>
        <View style={styles.apiContainerBackground}>
          {/* Encabezado con la imagen del clima */}
          <View style={styles.weatherHeader}>
            {weatherData && (
              <View style={styles.weatherDetails}>
                <Text style={styles.weatherText}>
                  Temperatura: {weatherData.current.temp_c}°C
                </Text>
                <Text style={styles.weatherText}>
                  Sensación térmica: {weatherData.current.feelslike_c}°C
                </Text>
                <Text style={styles.weatherText}>
                  Velocidad del viento: {weatherData.current.wind_kph} km/h
                </Text>
                <Text style={styles.weatherText}>
                  Dirección del viento: {weatherData.current.wind_dir}
                </Text>
                <Text style={styles.weatherText}>
                  Humedad: {weatherData.current.humidity}%
                </Text>
                <Text style={styles.weatherText}>
                  Índice UV: {weatherData.current.uv}
                </Text>
                <Text style={styles.weatherText}>
                  Presión atmosférica: {weatherData.current.pressure_mb} mb
                </Text>
                {/* Agrega más información aquí si lo deseas */}
              </View>
            )}
          </View>

          {/* Resto de tu contenido */}
          {weatherData && <WeatherInfo weatherData={weatherData} />}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

