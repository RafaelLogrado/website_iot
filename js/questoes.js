const questoes = {
    q1: {
        pergunta: "<p>Uma empresa de indústrias procura implementar robôs industriais em sua produção. Os requisitos para o robô são de que ele consiga realizar cortes de alta precisão, repetidamente, em chapas de variadas ligas metálicas sobre uma superfície horizontal. Qual seria o robô mais adequado para as necessidades da empresa?</p>",
        imagem: false,
        respA: {
            texto: "Robô cilíndrico"
        },
        respB: {
            texto: "Robô delta"
        },
        respC: {
            texto: "Robô colaborativo"
        },
        respD: {
            correta: true,
            texto: "Robô cartesiano"
        }
    },
    q2: {
        pergunta: "<p>Um técnico está tendo dificuldades para conectar o sensor de distância a um Arduino. Ele te chamou para perguntar sobre as conexões dos pinos. Da esquerda para direita, qual seria as conexões corretas a se fazer?</p>",
        imagem: "../media/questoes/q2.png",
        respA: {
            correta: true,
            texto: "Pino 5V - Pino OUTPUT - Pino INPUT - Aterramento"
        },
        respB: {
            texto: "Pino INPUT - Pino INPUT - Pino 5V - Aterramento"
        },
        respC: {
            texto: "Aterramento - Pino INPUT - Pino analógico - Pino 3.3V"
        },
        respD: {
            texto: "Pino 5V - Pino analógico - Aterramento - Pino OUTPUT"
        }
    },
    q3: {
        pergunta: "<p>O sensoriamento é o ato ou processo de detectar, medir e coletar dados sobre um objeto, ambiente ou fenômeno físico por meio de dispositivos chamados sensores, sem que haja necessidade de contato físico direto. Eles transformam grandezas físicas ou químicas (como temperatura, pressão, nível e posição) em sinais elétricos interpretáveis por controladores. <br>Qual dessas empresas PRECISA de sensoriamento?</p>",
        imagem: false,
        respA: {
            texto: "e-commerce sem estoque físico próprio"
        },
        respB: {
            texto: "escritório de advocacia"
        },
        respC: {
            texto: "corretora de imóveis"
        },
        respD: {
            correta: true,
            texto: "postos de combustível"
        }
    },
    q4: {
        pergunta: "<p>Você é o engenheiro eletricista responsável pela manutenção de uma linha de produção industrial. De repente, a esteira transportadora principal para de funcionar. Ao abrir o painel elétrico de controle, você nota que o Controlador Lógico Programável (CLP) está ligado, mas o contator que aciona o motor trifásico da esteira não atraca (não fecha os contatos). <br>Você suspeita que a bobina do contator queimou (rompeu internamente) e precisa confirmar se ela está interrompida (em circuito aberto) antes de solicitar a troca da peça do estoque. O contator está completamente desenergizado e desconectado do circuito para garantir a segurança. <br>Para diagnosticar se a bobina está realmente partida ou intacta, em qual escala/opção do multímetro você deve posicionar a chave seletora?</p>",
        imagem: "../media/questoes/q4.png",
        respA: {
            texto: "tensão contínua"
        },
        respB: {
            correta: true,
            texto: "resistência / continuidade"
        },
        respC: {
            texto: "corrente alternada"
        },
        respD: {
            texto: "capacitância"
        }
    },
    q5: {
        pergunta: "<p>Você precisa montar um circuito simples de sensoriamento que acende um LED em certas condições. Pesquisando na internet, descobre que precisa de um resistor de 220 ohms na conexão dos pinos LED. Para isso, você abre sua caixa de componentes e deve escolher o resistor correto. Qual deles é o adequado para o circuito?</p>",
        imagem: "../media/questoes/q5.png",
        respA: {
            texto: "Resistor 1"
        },
        respB: {
            correta: true,
            texto: "Resistor 2"
        },
        respC: {
            texto: "Resistor 3"
        },
        respD: {
            texto: "Resistor 4"
        }
    },
    q6: {
        pergunta: "<p>O Arduino é uma plataforma de prototipagem eletrônica de código aberto (open-source) baseada em uma placa de hardware com um microcontrolador integrado e um ambiente de desenvolvimento de software (Arduino IDE). Em suas conexões de pinos digitais, pode se observar um til (~) em alguns deles. Qual a principal diferença de um pino que tem esse símbolo em sua numeração?</p>",
        imagem: false,
        respA: {
            texto: "não há diferença real, pois apenas mostra que sua numeração (energia) é uma aproximação"
        },
        respB: {
            texto: "indica que o pino possuí um fusível de proteção interna contra sobretensão"
        },
        respC: {
            correta: true,
            texto: "indica que simula uma saída analógica"
        },
        respD: {
            texto: "indica um inversor de sinal lógico por hardware"
        }
    },
    q7: {
        pergunta: "<p>O ESP32 é um microcontrolador de baixo custo e baixo consumo de energia que já vem com conexões Wi-Fi e Bluetooth integradas. Apesar de ser muito usado em conjunto ao Arduino, é preciso de cuidados ao integrar ambos. Qual das características do ESP32 abaixo faz com que um resistor seja obrigatório para conectar um pino digital do Arduino ao ESP32?</p>",
        imagem: false,
        respA: {
            texto: "ausência de diodos de proteção contra inversão de polaridade nas portas TX/RX"
        },
        respB: {
            correta: true,
            texto: "tensão operacional"
        },
        respC: {
            texto: "frequência de clock elevada"
        },
        respD: {
            texto: "resolução de 12 bits do conversor analógico-digital"
        }
    },
    q8: {
        pergunta: "<p>Você atua como especialista em IoT, e foi contratado para resolver problemas com Arduinos. Um projeto de iluminação smart em uma sala, utiliza de um sensor de distância, e um sensor de luminosidade que enviam para o arduinos valores, o qual processa e envia de volta se a luz deve acender, ou não. <br>O erro recebido pelo programa sinaliza a função mudarLED, função responsável pelo comportamento do LED, como o motivo para não funcionar corretamente. A variável ledPin está definida corretamente em outra parte do código. Quando analisado, nota-se a luz não acendendo no meio físico, não importando as condições.<pre><code>void mudarLED(distancia, limite, luminosidade)\n{\n  if(distancia < limite){\n    if(luminosidade < 800){\n      digitalWrite(ledPin, HIGH);\n    }else{\n      digitalWrite(ledPin, LOW);\n    }\n  }else{\n    digitalWrite(ledPin, LOW);\n  }\n}</code></pre><p>Por qual motivo acontece esse erro?</p>",
        imagem: false,
        respA: {
            correta: true,
            texto: "falta da definição do tipo de dados dos parâmetros da função"
        },
        respB: {
            texto: "a função digitalWrite() não existe, a correta sendo digitalSet()"
        },
        respC: {
            texto: "por se tratar de processamento de dados do meio físico, a função deve ser “digital”, e não “void”"
        },
        respD: {
            texto: "apresenta erros de sintaxe nas estruturas condicionais “if” e “else”, onde deve ser usado colchetes ao invés de parênteses"
        }
    },
    q9: {
        pergunta: "<p>Você atua como técnico em mecatrônica e está realizando a manutenção do sistema de refrigeração de um servidor. O sistema usa um sensor de temperatura e um relé para acionar um exaustor. O Arduino processa a leitura e ativa o exaustor caso a temperatura alcance o limite crítico estabelecido. <br>Durante os testes, a equipe de qualidade reportou um comportamento anômalo: o exaustor liga e permanece ligado o tempo todo, independentemente de a sala estar fria ou quente. A análise do código indicou que o problema se encontra na função controleExaustor. As variáveis globais (como pinoRele) e o setup dos pinos estão corretos.<pre><code>void controleExaustor(int tempAtual, int tempMaxima) {\n  if (tempAtual = tempMaxima) {\n    digitalWrite(pinoRele, HIGH);\n  } else {\n    digitalWrite(pinoRele, LOW);\n  }\n}</code></pre><p>Por qual motivo acontece esse erro?</p>",
        imagem: false,
        respA: {
            texto: "A função digitalWrite() está sendo usada incorretamente, pois dispositivos de potência como relés exigem o uso de analogWrite()"
        },
        respB: {
            texto: "A variável pinoRele precisa ser declarada localmente dentro da função para que o comando de acionamento funcione"
        },
        respC: {
            correta: true,
            texto: "O operador = dentro do comando if realiza uma atribuição de valor em vez de uma comparação matemática, fazendo a condição ser avaliada sempre como verdadeira"
        },
        respD: {
            texto: "Falta a declaração de tipo void nas variáveis de escopo local, gerando um loop infinito na memória do microcontrolador"
        }
    },
    q10: {
        pergunta: "<p>Você foi designado para programar o módulo de segurança de um cofre inteligente. O projeto utiliza um sensor ultrassônico que mede a distância de aproximação de uma pessoa. Foi criada uma sub-rotina (função) específica no Arduino para fazer a leitura do pulso e devolver o valor calculated em centímetros para que o alarme decida se deve ou não tocar. <br>Apesar de o código compilar com sucesso e sem avisos impeditivos, o alarme nunca dispara ou dispara aleatoriamente, pois a função responsável por calcular a distância não entrega o resultado correto para a lógica principal. <br>Ao analisar o código da função calcularDistancia:<pre><code>int calcularDistancia(int pinoEcho, int pinoTrig) {\n  digitalWrite(pinoTrig, LOW);\n  delayMicroseconds(2);\n  digitalWrite(pinoTrig, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(pinoTrig, LOW);\n  \n  long duracao = pulseIn(pinoEcho, HIGH);\n  int distancia = duracao * 0.034 / 2;\n}</code></pre><p>Por qual motivo acontece esse erro?</p>",
        imagem: false,
        respA: {
            texto: "O sensor ultrassônico exige obrigatoriamente o uso da função analogRead() para capturar a duração do pulso no pino ECHO."
        },
        respB: {
            correta: true,
            texto: "A função foi definida com o tipo de retorno int, porém falta a instrução return distancia; ao final para entregar o valor calculado de volta."
        },
        respC: {
            texto: "A variável duracao foi declarada como long, mas no Arduino o cálculo de tempo do ultrassônico aceita exclusivamente o tipo float."
        },
        respD: {
            texto: "A função pulseIn() deve ser declarada dentro do bloco void setup(), pois se trata de uma função de inicialização de hardware."
        }
    }
}