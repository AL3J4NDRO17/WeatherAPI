import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./estilos";

export const WeatherInfo = ({ weatherData }) => {
    return (
        <View style={styles.weatherContainer}>
            <View style={styles.weatherHeader}>
                {weatherData.current.condition.icon && (
                    <Image
                        source={{ uri: `http:${weatherData.current.condition.icon}` }}
                        style={styles.enlargedWeatherIcon}
                    />
                )}
            </View>
            <Text style={styles.weatherTemp}>{weatherData.current.temp_c}°C</Text>
            <Text style={styles.weatherCondition}>{weatherData.current.condition.text}</Text>
            <Text style={styles.weatherInfo}>
                Wind: {weatherData.current.wind_kph} km/h | Humidity: {weatherData.current.humidity}%
            </Text>
        </View>
    );
};
