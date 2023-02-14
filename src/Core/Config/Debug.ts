import chalk from "chalk";
import moment from "moment";
import AppConfig from "./App";

// Classe Debug: permite exibir mensagens de log com diferentes estilos de cor
// dependendo do status da mensagem (error, warning ou success)
class Debug {
  // objeto que contém as configurações de cor para cada status de mensagem
  private static statusColors = {
    error: { color: chalk.red, text: "ERROR" },
    warning: { color: chalk.yellow, text: "WARNING" },
    success: { color: chalk.green, text: "SUCCESS" },
  };

  // Método log: permite exibir mensagens de log no console
  // message: contém a mensagem a ser exibida
  // status: indica o status da mensagem, podendo ser error, warning ou success
  public static log(message: string, status: "error" | "warning" | "success" = "success") {
    // se o modo de debug não estiver ativado, o método não exibirá nenhuma mensagem
    if (!AppConfig.debugMode) {
      return;
    }

    // obtém as configurações de cor para o status da mensagem
    const statusData = Debug.statusColors[status] || { color: chalk.white, text: "" };

    // exibe a mensagem no console, com o horário atual, o status e a mensagem em si
    console.log(
      statusData.color(`[${statusData.text}] ${moment().format("YYYY-MM-DD HH:mm:ss")} - ${message}`)
    );
  }
}

// exporta a classe Debug para ser utilizada em outros arquivos
export default Debug;