import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cadastro-matricula',
  templateUrl: './cadastro-matricula.component.html',
  styleUrls: ['./cadastro-matricula.component.css']
})

export class CadastroMatriculaComponent implements OnInit {

  passo = 0;
  passos = [
      {
        'progresso': 0,
        'nome': 'Informações da criança',
        'fields': ['nome', 'dtNascimento', 'naturalidade', 'sexo', 'etnia', 'cpf_crianca']
      },
      {
        'progresso': 10,
        'nome': 'Endereço e contato',
        'fields': ['rua', 'numero', 'bairro', 'cep', 'telefone1', 'telefone2', 'telefone3', 'telefone4']
      },
      {
        'progresso': 20,
        'nome': 'Informações pessoais',
        'nomeBotao': 'Próximo',
        'fields': ['autorizados', 'deficiencias', 'medicacao', 'alergias', 'historico', 'historicoCreche', 'banheiro']
      },
      {
        'progresso': 25,
        'nome': 'Personalidade',
        'fields': ['gostos', 'amigos', 'tvshows', 'lugares', 'educacenso']
      },
      {
        'progresso': 35,
        'nome': 'Informações do responsável',
        'fields': ['resp_nome', 'resp_rg', 'resp_cpf']
      },
      {
        'progresso': 40,
        'nome': 'Informações do responsável',
        'fields': ['resp_prof', 'resp_tempo', 'resp_horario', 'resp_auto', 'resp_salario', 'resp_empresa', 'resp_telefone']
      },
      {
        'progresso': 45,
        'nome': 'Informações do responsável',
        'fields': ['resp_estadocivil', 'resp_religiao', 'resp_endereco', 'resp_situacao']
      },
      {
        'progresso': 48,
        'nome': 'Benefícios',
        'fields': ['fam_bolsa', 'fam_nis', 'fam_valor']
      },
      {
        'progresso': 52,
        'nome': 'Financeiro',
        'fields': ['fam_necessidades', 'fam_tipoimovel', 'fam_valoraluguel', 'fam_imoveis', 'fam_transporte']
      },
      {
        'progresso': 55,
        'nome': 'Informações adicionais',
        'fields': ['fam_infraestrutura', 'fam_comodos', 'fam_cuidadores', 'fam_esperanca']
      },
      {
        'progresso': 65,
        'nome': 'Condições da família 1',
        'fields': ['cond_despesasmensais', 'cond_medicamentos', 'cond_transporte', 'cond_escolas']
      },
      {
        'progresso': 75,
        'nome': 'Condições da família 2',
        'fields': ['cond_convenio', 'cond_saude', 'cond_saudeequipe', 'cond_pessoas', 'cond_total', 'cond_renda']
      },
      {
        'progresso': 90,
        'nome': 'Projetos',
        'fields': ['projeto_pinguinho']
      },
      {
        'progresso': 100,
        'nome': 'Confirme os dados',
        'nomeBotao': 'Salvar',
        'fields': ['overview']
      }
    ];
  fields = {
    'nome': {
      'value': '',
      'label': 'Nome',
      'subLabel': 'Nome completo',
      'template': 'text',
      'required': true,
    },
    'dtNascimento': {
      'value': '',
      'label': 'Data de nascimento',
      'subLabel': 'Exemplo: 14/05/1999',
      'template': 'text',
      'validations': ['validarPattern'],
      'pattern': '^([0-2][0-9]|(3)[0-1])(\\/)(((0)[0-9])|((1)[0-2]))(\\/)\\d{4}$',
      'required': true,
    },
    'naturalidade': {
      'value': '',
      'label': 'Naturalidade',
      'template': 'text',
      'required': true,
    },
    'sexo': {
      'value': '',
      'label': 'Sexo',
      'template': 'select',
      'required': true,
      'options': [
        {
          'value': 'Masculino',
          'label': 'Masculino'
        },
        {
          'value': 'Feminino',
          'label': 'Feminino'
        },
        {
          'value': 'Outro',
          'label': 'Outro'
        },
      ]
    },
    'etnia': {
      'value': '',
      'label': 'Etnia',
      'template': 'text',
      'required': false,
    },
    'cpf_crianca': {
      'value': '',
      'label': 'CPF',
      'subLabel': 'Somente números',
      'validations': ['validarCPF'],
      'template': 'text',
      'required': false,
    },
    'rua': {
      'value': '',
      'label': 'Rua',
      'template': 'text',
      'required': true,
    },
    'numero': {
      'value': '',
      'label': 'Numero',
      'template': 'text',
      'required': true,
    },
    'bairro': {
      'value': '',
      'label': 'Bairro',
      'template': 'text',
      'required': true,
    },
    'cep': {
      'value': '',
      'label': 'CEP',
      'template': 'text',
      'required': true,
    },
    'telefone1': {
      'value': '',
      'label': 'Telefone 1',
      'template': 'text',
      'required': true,
    },
    'telefone2': {
      'value': '',
      'label': 'Telefone 2',
      'template': 'text',
      'required': false,
    },
    'telefone3': {
      'value': '',
      'label': 'Telefone 3',
      'template': 'text',
      'required': false,
    },
    'telefone4': {
      'value': '',
      'label': 'Telefone 4',
      'template': 'text',
      'required': false,
    },
    'autorizados': {
      'value': '',
      'label': 'Pessoas autorizadas a buscar a criança',
      'template': 'text',
      'required': true,
    },
    'deficiencias': {
      'value': '',
      'label': 'Possui deficiências?',
      'template': 'option',
      'required': true,
    },
    'medicacao': {
      'value': '',
      'label': 'Utiliza medicação controlada?',
      'template': 'option',
      'required': true,
    },
    'alergias': {
      'value': '',
      'label': 'Tem alguma alergia?',
      'template': 'option',
      'required': true,
    },
    'historico': {
      'value': '',
      'label': 'Já teve alguma doença infantil?',
      'template': 'option',
      'required': true,
    },
    'historicoCreche': {
      'value': '',
      'label': 'Já frequentou creche/escola?',
      'template': 'option',
      'required': true,
    },
    'banheiro': {
      'value': '',
      'label': 'Usa o banheiro?',
      'template': 'option',
      'required': true,
    },
    'gostos': {
      'value': '',
      'label': 'O que gosta de fazer?',
      'template': 'text',
      'required': false,
    },
    'amigos': {
      'value': '',
      'label': 'Com quem brinca?',
      'template': 'text',
      'required': false,
    },
    'tvshows': {
      'value': '',
      'label': 'O que gosta de assistir?',
      'template': 'text',
      'required': false,
    },
    'lugares': {
      'value': '',
      'label': 'Onde a criança vai?',
      'template': 'text',
      'required': false,
    },
    'educacenso': {
      'value': '',
      'label': 'Número educacenso',
      'template': 'text',
      'required': false,
    },
    'resp_nome': {
      'value': '',
      'label': 'Nome',
      'template': 'text',
      'required': true,
    },
    'resp_rg': {
      'value': '',
      'label': 'RG',
      'template': 'text',
      'required': false,
    },
    'resp_cpf': {
      'value': '',
      'label': 'CPF',
      'template': 'text',
      'required': true,
    },
    'resp_prof': {
      'value': '',
      'label': 'Profissão',
      'template': 'text',
      'required': false,
    },
    'resp_tempo': {
      'value': '',
      'label': 'Tempo de serviço',
      'template': 'text',
      'required': false,
    },
    'resp_horario': {
      'value': '',
      'label': 'Horário de trabalho',
      'template': 'text',
      'required': false,
    },
    'resp_auto': {
      'value': '',
      'label': 'Autônomo?',
      'template': 'option',
      'required': true,
    },
    'resp_salario': {
      'value': '',
      'label': 'Salário',
      'template': 'text',
      'required': false,
    },
    'resp_empresa': {
      'value': '',
      'label': 'Empresa',
      'template': 'text',
      'required': false,
    },
    'resp_telefone': {
      'value': '',
      'label': 'Telefone trabalho',
      'template': 'text',
      'required': false,
    },
    'resp_estadocivil': {
      'value': '',
      'label': 'Estado Civil',
      'template': 'text',
      'required': false,
    },
    'resp_religiao': {
      'value': '',
      'label': 'Religião',
      'template': 'text',
      'required': false,
    },
    'resp_endereco': {
      'value': '',
      'label': 'Endereço',
      'template': 'text',
      'required': true,
    },
    'resp_situacao': {
      'value': '',
      'label': 'Situação de convívio com a criança',
      'template': 'text',
      'required': true,
    },
    'fam_bolsa': {
      'value': '',
      'label': 'Bolsa Família',
      'template': 'option',
      'required': true,
    },
    'fam_nis': {
      'value': '',
      'readOnly': true,
      'label': 'Número do NIS',
      'template': 'text',
      'required': true,
    },
    'fam_valor': {
      'value': '',
      'readOnly': true,
      'label': 'Valor',
      'template': 'text',
      'required': true,
    },
    'fam_necessidades': {
      'value': '',
      'label': 'Portadores de necessidades especiais',
      'template': 'option',
      'required': true,
    },
    'fam_tipoimovel': {
      'value': '',
      'label': 'Tipo do imóvel',
      'template': 'text',
      'required': false,
    },
    'fam_valoraluguel': {
      'value': '',
      'label': 'Valor do alugel',
      'template': 'text',
      'required': false,
    },
    'fam_imoveis': {
      'value': '',
      'label': 'Possui outros imóveis?',
      'template': 'option',
      'required': true,
    },
    'fam_transporte': {
      'value': '',
      'label': 'Possui meio de transporte',
      'template': 'option',
      'required': true,
    },
    'fam_infraestrutura': {
      'value': '',
      'label': 'Infraestrutura da rua (água encanada, esgoto, coleta de lixo)',
      'template': 'text',
      'required': false,
    },
    'fam_comodos': {
      'value': '',
      'label': 'Número de cômodos da casa',
      'template': 'text',
      'required': false,
    },
    'fam_cuidadores': {
      'value': '',
      'label': 'Quem cuida da criança em casa',
      'template': 'text',
      'required': true,
    },
    'fam_esperanca': {
      'value': '',
      'label': 'O que espera da creche?',
      'template': 'text',
      'required': false,
    },
    'cond_despesasmensais': {
      'value': '',
      'label': 'Despesas mensais fixas',
      'template': 'text',
      'required': false,
    },
    'cond_medicamentos': {
      'value': '',
      'label': 'Medicamentos contínuos',
      'template': 'text',
      'required': false,
    },
    'cond_transporte': {
      'value': '',
      'label': 'Transportes',
      'template': 'text',
      'required': false,
    },
    'cond_escolas': {
      'value': '',
      'label': 'Mensalidades escolares',
      'template': 'text',
      'required': false,
    },
    'cond_convenio': {
      'value': '',
      'label': 'Possui convênio médico?',
      'template': 'option',
      'required': false,
    },
    'cond_saude': {
      'value': '',
      'label': 'Posto de saúde',
      'template': 'text',
      'required': false,
    },
    'cond_saudeequipe': {
      'value': '',
      'label': 'Equipe',
      'template': 'text',
      'required': false,
    },
    'cond_pessoas': {
      'value': '',
      'label': 'Nomes das Pessoas que residem no endereço da criança',
      'template': 'text',
      'required': true,
    },
    'cond_total': {
      'value': '',
      'label': 'Total de pessoas',
      'template': 'text',
      'required': true,
    },
    'cond_renda': {
      'value': '',
      'label': 'Renda mensal',
      'template': 'text',
      'required': true,
    },
    'projeto_pinguinho': {
      'value': '',
      'label': 'Autoriza fotografar a criança nos projetos da creche',
      'template': 'option',
      'required': true,
    },
    'overview': {
      'value': '',
      'label': '',
      'enviar': false,
      'template': 'overview',
      'required': false,
    }
  };

  arrayFields = [];

  constructor(public snackBar: MatSnackBar, private httpClient: HttpClient) {
    // Step 1. Get all the object keys.
    const keys = Object.keys(this.fields);
    // Step 2. Iterate throw all keys.
    for (const field of keys) {
      this.fields[field].id = field;
      this.arrayFields.push(this.fields[field]);

    }
  }

  ngOnInit() {
  }

  proximoPasso() {
    if (this.conferirValidations() && this.conferirFieldsObrigatorios()) {
      if (this.passos.length > this.passo + 1) {
        this.passo++;
      } else {
        this.salvar();
      }
    }
  }

  voltarPasso() {
    this.passo--;
  }

  conferirFieldsObrigatorios() {
    const self = this;
    const passoAtual = this.passos[this.passo];
    let camposPreenchidos = true;
    passoAtual.fields.forEach(function (field) {
      const readonly = self.fields[field].readOnly ? self.fields[field].readOnly : false;
      if (self.fields[field].required && !readonly && !self.fields[field].value) {
        camposPreenchidos = false;
      }
    });
    if (!camposPreenchidos) {
      this.mostrarMensagem('Preencha todos os campos obrigatórios');
    }
    // return true;
    return camposPreenchidos;
  }

  mostrarMensagem(message: string) {
    this.snackBar.open(message, '', {
      duration: 1500,
    });
  }

  mostrarMensagemConfirmacao(message: string, botao: string) {
    this.snackBar.open(message, botao, {
      duration: 5000,
    });
  }

  construirBody() {
    const body = {};

    for (const field in this.fields) {
      if (this.fields.hasOwnProperty(field)) {
        const enviar = this.fields[field].enviar ? this.fields[field].enviar : true;
        if (!enviar) {
          body[field] = this.fields[field].value;
        }
      }
    }

    return body;
  }

  salvar() {

    const body = this.construirBody();

    this.httpClient.post('http://127.0.0.1:8000/sistema/exemplo_form/', body)
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
        },
        error => {
          console.log('Error', error);
        }
      );
  }

  mostrarField(nomeField) {
    let result = false;
    if (this.passos[this.passo].fields.includes(nomeField)) {
      result = true;
    }
    return result;
  }

  validarPattern(field) {
    let result = false;
    const self = this;
    if (field.value) {
      if (field.value.match(field.pattern)) {
        result = true;
      } else {
        self.mostrarMensagemConfirmacao('Campo "' + field.label + '" inválido!', 'Ok');
      }
    } else {
      result = true;
    }
    return result;
  }

  validarCPF(field) {
    let soma = 0;
    let resto;
    const self = this;
    const inputCPF = field.value;

    if (inputCPF) {
      if (inputCPF === '00000000000') {
        self.mostrarMensagemConfirmacao('CPF Inválido!', 'Ok');
        return false;
      }
      for (let i = 1; i <= 9; i++) {
        soma = soma + parseInt(inputCPF.substring(i - 1, i), 0) * (11 - i);
      }
      resto = (soma * 10) % 11;

      if ((resto === 10) || (resto === 11)) {
        resto = 0;
      }
      if (resto !== parseInt(inputCPF.substring(9, 10), 0)) {
        self.mostrarMensagemConfirmacao('CPF Inválido!', 'Ok');
        return false;
      }

      soma = 0;
      for (let i = 1; i <= 10; i++) {
        soma = soma + parseInt(inputCPF.substring(i - 1, i), 0) * (12 - i);
      }
      resto = (soma * 10) % 11;

      if ((resto === 10) || (resto === 11)) {
        resto = 0;
      }
      if (resto !== parseInt(inputCPF.substring(10, 11), 0)) {
        self.mostrarMensagemConfirmacao('CPF Inválido!', 'Ok');
        return false;
      }
    }
    return true;
  }

  conferirValidations() {
    const self = this;
    const passoAtual = this.passos[this.passo];
    let result = true;
    passoAtual.fields.forEach(function (fieldName) {
      const field = self.fields[fieldName];
      if (field.validations && field.validations.length > 0) {
        field.validations.forEach(function (funct) {
          if (!self[funct](field)) {
             result = false;
          }
        });
      }
    });
    return result;
  }
}

