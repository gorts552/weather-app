interface WeatherData{
    name: string;
    main:{
        temp: number;
        humidity: number;
    };
    weather:{
        main:string;
        description:string;
    }[];
    wind: {
        speed: number;
    };
}
interface WeatherCardProps {
    data: WeatherData;
}
export default function WeatherCard({data }: WeatherCardProps) {
    return (
        <div className="card bg-base-200 w-full max-w-md mx-auto mt-8 shadow-md ">
            <div className="card-body">
                <h2 className="card-title text-2xl">{data.name}</h2>
                <p className="text-xl">{data.weather[0].main} - {data.weather[0].description}</p>
                <p>Temp: {data.main.temp}°C </p>
                <p>Humidity:{data.main.humidity}%</p>
                <p>Wind:{data.main.speed} m/s</p>
            </div>
        </div>
    )
}