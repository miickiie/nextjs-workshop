import fs from 'fs'

// Stimulate reading from API/DB
export default function readCityNames(): string[] {
    const data = fs.readFileSync('data/city_names.json', 'utf8')
    const city_names = JSON.parse(data)
    return city_names
}
