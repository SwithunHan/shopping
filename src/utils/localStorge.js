export function getCity(){
    return localStorage.getItem("city");
}
export function setCity(city) {
    localStorage.setItem("city",city);
}