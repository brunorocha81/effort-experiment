angular.module('tutor').controller("PosttestCtrl", function($scope, $location, User) {

    $scope.questions = ["É sociavel, extrovertido",
                        "É geralmente confiável",
                        "É, as vezes, rude (grosseiro) com os outros",
                        "É cheio de energia",
                        "Começa discussões, disputas com os outros",
                        "É um trabalhador de confiança",
                        "Faz planos e os segue a risca",
                        "Tem uma Imaginação fértil",
                        "Fica tenso com frequencia",
                        "É engenhoso, álguem que gosta de analisar profundamente as coisas",
                        "Fica nervoso facilmente",
                        "Gera muito entusiasmo",
                        "Tende a ser desorganizado",
                        "Gosta de refletir, brincar com idéais",
                        "Tem capacidade de perdoar, perdoa fácil",
                        "Preocupa-se muito com tudo",
                        "Tende a ser quieto, calado",
                        "Tem poucos interesses artísticos",
                        "É sofisticado em artes, músicas ou literatura"


    
    ];
    $scope.answers = [];

    $scope.processAnswers = function() {

        if ($scope.answers.length < 19) {
            $scope.msg = "Por favor, responda todas as perguntas!"
        } else {

          

            var ans = $scope.answers;
            console.log(ans);

            //invert positive answers
            // ans[0] = 5 - ans[0];
            // ans[1] = 5 - ans[1];
            // ans[4] = 5 - ans[4];
            // ans[7] = 5 - ans[7];
            // ans[9] = 5 - ans[9];
            // ans[10] = 5 - ans[10];
            // ans[14] = 5 - ans[14];
            // ans[15] = 5 - ans[15];
            // ans[18] = 5 - ans[18];
            // ans[19] = 5 - ans[19];

            var sum = ans.reduce(add, 0);

            function add(a, b) {
                return parseInt(a) + parseInt(b);
            }

            User.setPosttestPoints(sum);
            User.setPost(ans);

            $location.path("/flow");

        };
    }

});
