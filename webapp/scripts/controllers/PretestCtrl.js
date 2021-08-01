angular.module('tutor').controller("PretestCtrl", function($scope, $window, $location, configService, User) {

    var themes = ["default", "stFemale", "stMale"];

    var random = Math.floor((Math.random() * 10000)) % 3;

    $scope.questions = [
    "É conversador, comunicativo",
    "Ás vezes é frio e  distante",
    "Tende a ser crítico com os outros",
    "È minucioso, detalhista no trabalho",
    "É assertivo, não teme expressar o que sente",
    "Insiste até concluir a tarefa ou o trabalho",
    "È depressivo, triste",
    "Gosta de cooperar com os outros",
    "È original, tem sempre novas idéias",
    "È temperamental, muda de humor facilmente",
    "È inventivo, criativo",
    "È reservado",
    "Valoriza o artístico, o estético",
    "È emocionalmente estável, não se altera facilmente",
    "È prestativo e ajuda os outros",
    "È, as vezes, tímido, inibido",
    "Pode ser um tanto descuidado",
    "È amavel, tem considerações pelos outros",
    "Tente a ser preguiçoso",
    "Faz as coisas com eficiencia",
    "É relaxado, controla bem o estresse",
    "È facilmente distraido",
    "Mantém-se calmo nas situações tensas",
    "Prefere trabalho rotineiro",
    "É curioso sobre coisas diferentes",
];
    $scope.answers = [];

    $scope.setTime = function() {
        var time = new Date().getTime();
        User.setStartTime(time);
    };

    $scope.processAnswers = function() {

        //console.log($scope.answers);
        //  validation
        if ($scope.answers.length < 9) {
            $scope.msg = "Por favor, responda todas as perguntas!"
        } else {
            function add(a, b) {
                return parseInt(a) + parseInt(b);
            };

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

            console.log(ans);
            console.log("PRETEST: " + sum);

            configService.setTheme(themes[random]);
            // User.setGender($scope.gender);
            // User.setAge($scope.age);
            User.setTestType(themes[random]);
            User.setPretestPoints(sum);
            User.setPre(ans);

            console.log(User.getResponse());
            $location.path("/home");

        };

    };
});
