angular.module('tutor').controller("PretestCtrl", function($scope, $window, $location, configService, User) {

    var themes = ["default", "stFemale", "stMale"];

    var random = Math.floor((Math.random() * 10000)) % 3;

    $scope.questions = [
    "Já ultrapassei várias contrariedades para conseguir alcançar um objetivo importante.",
    "Novas ideias e projectos afastam-me, por vezes, de projectos anteriores. ",
    "Os meus interesses variam de ano para ano.",
    "Os contratempos não me desencorajam.",
    "Já estive obcecado com uma ideia ou projecto por um curto periodo de tempo, tendo-me desinteressado mais tarde.",
    "Sou muito trabalhador.",
    "É frequente estabelecer um objectivo mas acabar por seguir um diferente.",
    "Tenho dificuldade em me manter focado em projectos que demorem mais do que alguns meses para completar.",
    "Eu acabo tudo o que começo.",
    "Já alcancei um objectivo que me levou anos de esforço para o alcançar.",
    "Interesso-me por novos desafios regularmente.",
    "Sou aplicado.",
];
    $scope.answers = [];

    $scope.setTime = function() {
        var time = new Date().getTime();
        User.setStartTime(time);
    };

    $scope.processAnswers = function() {

        //console.log($scope.answers);
        //  validation
        if ($scope.answers.length < 12) {
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
            $location.path("/flow");

        };

    };
});
