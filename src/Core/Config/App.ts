class AppConfig {
    // Variável estática com a URL base da API
    static apiUrl: string = 'https://api.example.com';
  
    // Variável estática com o token de acesso à API
    static accessToken: string = 'YOUR_ACCESS_TOKEN';
  
    // Variável estática indicando se o modo de manutenção está habilitado
    static maintenanceMode: boolean = false;
  
    // Variável estática indicando se o modo de debug está habilitado
    static debugMode: boolean = false;
  }
  
  // Exporta a classe AppConfig como padrão
  export default AppConfig;