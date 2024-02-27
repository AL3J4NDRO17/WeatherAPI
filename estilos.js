import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
  },
  apiContainer: {
    flexGrow: 1,
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
  },
  apiContainerBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fondo semi-transparente blanco
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  weatherHeader: {
    marginBottom: 20,
    alignItems: 'center',
  },
  weatherDetails: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  weatherText: {
    fontSize: 24, // Tamaño de letra aumentado aún más
    marginBottom: 5,
    textAlign: 'center', // Alineación centrada
  },
  weatherCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  weatherIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  weatherConditionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    width: '100%', // Ajusta el ancho al 100% del contenedor
    height: '100%', // Ajusta la altura al 100% del contenedor
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
  },
});
