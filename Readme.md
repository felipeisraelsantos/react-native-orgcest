## React Native com expo

[NodeSource Node.js Binary Distributions - git](https://github.com/nodesource/distributions/blob/master/README.md)

~~~bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - &&\
sudo apt-get install -y nodejs

~~~

Para verificar a versão

~~~
node --version
~~~

Caso você já tenha instalado e quer mudar a versão, basta atualizar com o próprio npm, que é o gerenciador de pacotes embutido no Node.js:

~~~
npm install -g node@14.17.2
~~~

E, falando em npm, vamos utilizar a versão 7.19.1. Você pode atualizar ou verificar qual a versão atual na sua máquina rodando os seguintes comandos:

~~~
npm install -g npm@9.2.0
npm -v
~~~

Agora que já temos o node instalado, fica bem simples instalar o Expo! 
Basta rodar o comando abaixo:

~~~
sudo npm install --global expo-cli
~~~
Além disso, se deseja rodar a aplicação no seu celular ou tablet, você precisa baixar e instalar no seu dispositivo móvel o aplicativo do Expo na [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent) ou na [App Store](https://apps.apple.com/br/app/expo-go/id982107779).

Criando o projeto

Em seguida, execute os seguintes comandos para criar um novo projeto React Native:

~~~ 
expo init NomedoProjeto
~~~

```Observação

AVISO: o expo-cli ainda não foi testado no Node.js v18.12.1.
Se você encontrar algum problema, informe-o em https://github.com/expo/expo-cli/issues

expo-cli suporta as seguintes versões do Node.js:

*`>=12.13.0 <15.0.0 (Manutenção LTS)`*

*`>=16.0.0 <17.0.0 (LTS ativo)`*


Migrar para usar:  *`npx create-expo-app --template`*
```
Após criação do projeto

- entre na pasta do projeto

Execute o seguinte comando, você pode abrir iOS, Android ou web a partir daqui, ou executá-los diretamente com os comandos abaixo.
~~~
npm start 
npm run android
npm run ios # requer um dispositivo iOS ou macOS para acesso a um simulador iOS
npm run web
~~~

Observações

>Utilizando o Expo não precisamos instalar o ambiente Java com Android Studio ou Xcode, pois ele é enviado diretamente ao aplicativo do Expo instalado no celular que já inclui os códigos nativos necessários. Os aplicativos criados com o Expo em geral ocupam um pouco mais de espaço no celular do que aplicativos criados da forma tradicional em React Native, pois o expo já mantém todos os recursos necessários em caso de atualizações OTA. Por permitir atualizações sem envio de um novo arquivo para as lojas de aplicativos, o Expo já adiciona na base do aplicativo todos os códigos fontes de funcionalidades que ele permite na aplicação, mesmo que não estejamos utilizando no momento.


Usando fontes do Google

~~~
expo install @expo-google-fonts/{fonteEscolhida} expo-font
~~~

- Instalando AppLoading

Isso é útil para baixar e armazenar em cache fontes, logotipos, imagens de ícones e outros ativos que você deseja garantir que o usuário tenha em seu dispositivo para uma experiência ideal.

~~~bash
expo install expo-app-loading
~~~