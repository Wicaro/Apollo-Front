import xss from "xss";

// Classe que contém as credenciais necessárias para acessar a API
class CredentialsConfig {
    static username: string = 'YOUR_USERNAME';
    static password: string = 'YOUR_PASSWORD';
    static apiKey: string = 'YOUR_API_KEY';
}

// Classe que contém configurações de proteção para a API
class ProtectionConfig {
    // Lista de origens permitidas a acessar a API
    static allowedOrigins: string[] = ['https://example.com'];
    
    // Se a API permite ou não requisições CORS
    static cors: boolean = true;
    
    // Limite de requisições por período de tempo
    static rateLimit: number = 100;
    
    // Se a API somente permite requisições HTTPS
    static useHttps: boolean = true;
    
    // Tempo de validade do token de autenticação
    static tokenExpiry: number = 3600;
    
    // Se a API requer autenticação
    static enableAuth: boolean = true;

    // Método que remove códigos maliciosos da entrada de dados
    removeMaliciousCode(data: any) {
      return xss(data);
    }
}
  
export { CredentialsConfig, ProtectionConfig };