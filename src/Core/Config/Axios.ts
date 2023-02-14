// Importação da biblioteca axios
import axios from 'axios';
// Importação das classes CredentialsConfig e ProtectionConfig da pasta Security
import { CredentialsConfig, ProtectionConfig } from './Security';

/**
 * Classe AxiosConfig: Possui configurações para serem utilizadas pelo axios
 */
class AxiosConfig {
  /**
   * Criação de uma instância axios
   * baseURL: Define a URL base para as requisições
   * headers: Define o tipo de conteúdo a ser enviado nas requisições e adiciona o token de autorização
   */
  static instance = axios.create({
    baseURL: 'https://api.example.com',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${CredentialsConfig.apiKey}`
    }
  });

  /**
   * Método setupInterceptors: Adiciona interceptors à instância axios criada
   * (interceptors são funções que são executadas antes da requisição ser enviada ou depois de sua resposta ser recebida)
   * instance: Recebe a instância axios criada
   */
  static setupInterceptors = (instance: any) => {
    // Adiciona um interceptor na requisição
    instance.interceptors.request.use(
      // Função que será executada antes da requisição ser enviada
      (config: { url: string; }) => {
        // Verifica se a opção de uso de HTTPS está habilitada na classe ProtectionConfig
        if (ProtectionConfig.useHttps) {
          // Substitui o protocolo HTTP pelo HTTPS na URL da requisição
          config.url = config.url.replace('http://', 'https://');
        }
        // Retorna a configuração da requisição
        return config;
      },
      // Função que será executada em caso de erro na requisição
      (error: any) => {
        // Retorna uma Promise rejeitada com o erro
        return Promise.reject(error);
      }
    );
  };

  /**
   * Método setup: Configura os interceptors na instância axios
   */
  static setup = () => {
    // Chama o método setupInterceptors, passando a instância axios criada como parâmetro
    AxiosConfig.setupInterceptors(AxiosConfig.instance);
  };
}

// Exporta a classe AxiosConfig como padrão
export default AxiosConfig;