<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;


class WeatherController extends Controller
{
    public function getWeather(Request $request)
    {
        $city = $request->query('city', 'Nairobi');
        $apiKey = config('services.openweathermap.key');


        $url = "https://api.openweathermap.org/data/2.5/weather?q={$city}&appid={$apiKey}&units=metric";

        try {
            $response = Http::get($url);

            if ($response->successful()) {
                return response()->json($response->json());
            } else {
                return response()->json([
                    'error' => 'Failed to fetch weather data from OpenWeatherMap.',
                    'url' => $url,
                    'status' => $response->status(),
                    'body' => $response->body()
                ], $response->status());
            }

        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Exception occurred while fetching weather data.',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
