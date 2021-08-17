angular.module('tutor').controller("PosttestCtrl", function($scope, $location, User) {

    $scope.questions = [
        "Estava muito claro para mim como eu estava me saindo na atividade",
        "Não estava preocupado com o que os outros podiam estar pensando de mim",
        "Minhas habilidades combinavam com o desafio da atividade que estava fazendo",
        "As coisas pareciam estar acontecendo automaticamente.",
        "A forma como o tempo passou parecia ser diferente do normal",
        "Eu sabia o que queria alcançar",
        "Tive uma sensação de total controle sobre o que estava fazendo",
        "A experiência me deixou com uma ótima sensação",
        "Estava completamente focado na tarefa em questão",

    
    ];
    $scope.answers = [];

    $scope.processAnswers = function() {

        if ($scope.answers.length < 9) {
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

            $location.path("/questionary");

        };
    }

});
