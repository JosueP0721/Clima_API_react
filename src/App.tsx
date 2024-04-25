import styles from './App.module.css'
import Alert from './components/Alert/Alert'
import Form from './components/Form/Form'
import Spinner from './components/Spinner/Spinner'
import WeatherDetail from './components/WeatherDetail/WeatherDetail'
import useWeather from './hook/useWeather'

function App() {

    const { weather, fetchWeather, hasWeatherData, notFound, loading } = useWeather()

    return (
        <>
            <h1 className={styles.title}>Buscador de Clima</h1>
            <div className={styles.container}>
                <Form 
                    fetchWeather={fetchWeather}
                />
                { loading && ( <Spinner />) }
                { notFound && <Alert>Ciudad no encontrada</Alert>}
                { hasWeatherData && (
                    <WeatherDetail 
                        weather={weather}
                    />
                )}
            </div>
        </>
    )
}

export default App
