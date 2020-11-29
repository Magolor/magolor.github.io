/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/07/22/2018-07-22-blog-01/index.html","c4ba03a7fb3665348deab3bae419bbe4"],["/2018/07/22/2018-07-22-blog-02/index.html","54e7eba553dcec9edaba8ef46053bf5f"],["/2018/07/22/profile/index.html","6a28f27c9e9c845644b960f52c5d0aee"],["/2018/08/05/2018-08-05-blog-01/index.html","f3d7072b0a063e1dc91d20b11389235b"],["/2018/08/27/2018-08-27-blog-01/index.html","dd5c4b177bf16ea55e564605eda4e3b1"],["/2018/12/01/2018-12-01-blog-01/index.html","197ca2e94a9c3279f8bc0df88c0cdf7b"],["/2019/01/29/2019-01-29-blog-01/index.html","2cd6afdeeac596c7c731e46a864cc231"],["/2019/01/31/2019-01-31-blog-01/index.html","9c85b25f0b6cfafbf65bab9e3c1b2e3f"],["/2019/02/02/2019-02-02-blog-01/index.html","a8963ac20da99e6e3bf2be217ad4e30e"],["/2019/06/04/2019-06-04-blog-01/index.html","09e4ff633336e3913397b5aee91e90e3"],["/2019/06/04/2019-06-04-blog-02/index.html","d236b7b2b9ee273f048c633270a739d7"],["/2019/06/04/2019-06-04-blog-03/index.html","e0b3471e8370e6992e5593e553a27af3"],["/2019/06/04/2019-06-04-blog-04/index.html","bd3f933e24b3cac6261ca1af5da3d47a"],["/2019/06/12/2019-06-12-blog-01/index.html","d3333f1a5f85c1148b95fd917d144570"],["/2019/07/10/2019-07-10-blog-01/index.html","b35ee72a7cbda8a1e11bdf81019a81b7"],["/2019/07/14/2019-07-14-blog-01/index.html","58404cc1cea04679d72c64160b4c8eb2"],["/2019/07/14/2019-07-14-blog-02/index.html","32c74bb640c513023b61d6ed9bb9b503"],["/2019/07/27/2019-07-27-blog-01/index.html","65f158d7cb2aa09d4befcee3e63664f7"],["/2019/08/02/2019-08-02-blog-01/index.html","19e28dd9f99d4f9a0b1466330e9416e4"],["/2019/08/04/2019-08-04-blog-01/index.html","a848d97284d3c7d04ee32f8ac4193b53"],["/2019/08/06/data_structures/index.html","ee1abe0a1ad23a847b4d4610959257ac"],["/2019/08/07/number_theory/index.html","cd178245f8fb855db105ccb8806453c1"],["/2019/08/13/2019-08-13-blog-01/index.html","fc1587b46b7b4707769740a4840a7eaa"],["/2019/08/18/2019-08-18-blog-01/index.html","9b777d6b518e50ef43c57e2bbbbe0f1d"],["/2019/08/25/2019-08-25-blog-01/index.html","5acdf7dbc2b1fff7a528e57c5a8ab1ef"],["/2019/08/29/2019-08-29-blog-01/index.html","7643e7b01e05b1b95ff852632c5de3ee"],["/2019/09/24/2019-09-24-blog-01/index.html","c8cbce46df98f8a26912e6275955ca1a"],["/2019/10/24/2019-10-24-blog-01/index.html","4582b30394bd4c0886b6887398bdf1f6"],["/2019/10/27/protocols_security/index.html","9d0f1c153dd6ec89b43364f79ec1b906"],["/2019/12/08/2019-12-08-blog-01/index.html","62138a55d5a7bc664d424311f2a9af39"],["/2019/12/16/2019-12-16-blog-01/index.html","05c87f81d81d146f683db4ff168b0f40"],["/2019/12/21/2019-12-21-blog-01/index.html","0f796a9f0d34097c6cc46ab421b1990f"],["/2019/12/28/2019-12-28-blog-01/index.html","4a3a723524809119f8624c6330183376"],["/2020/01/12/2020-01-12-blog-01/index.html","7f316fa4b8b36a8151d37bfb916129c8"],["/2020/01/14/2020-01-14-blog-01/index.html","682baac2717edea69e854827965a0916"],["/2020/02/13/2020-02-13-blog-01/index.html","64521cc659ff487897f8f22a40297575"],["/2020/04/02/2020-04-02-blog-01/index.html","efcdb840d1c91ef2dd1380ed29518f0f"],["/2020/06/07/2020-06-07-blog-01/index.html","a9638f63bd4807afb97e1111ea191408"],["/2020/07/11/2020-07-11-blog-01/index.html","5e96d6ebfb3b7eb130042d81e5df6585"],["/2020/07/19/2020-07-19-blog-01/index.html","5574e652a50292afaaa94a9a3ce772b1"],["/2020/08/12/data_structures_2/index.html","eb386214391b436280ecfa388693013f"],["/2020/11/29/2020-11-29-blog-01/index.html","8ecff5347a38e4f7c5851850fabff419"],["/archives/2018/07/index.html","8524e7ffccddc7b6d9ecf015bcbd77ae"],["/archives/2018/08/index.html","ba689a1567b359df0880516f34095f61"],["/archives/2018/12/index.html","b43c297b3c199b6ef47bf2ff19d110b8"],["/archives/2018/index.html","1efd31e8873805ac047edfe69029695e"],["/archives/2019/01/index.html","8b9b0b09e85aa07944080833719df22b"],["/archives/2019/02/index.html","44447b2993c3cdac26b8ba25fe527b4a"],["/archives/2019/06/index.html","ae38f6d7b763e5b1cf5f93a0264b47a6"],["/archives/2019/07/index.html","32dd8990f7eace04540ab20bd8efe845"],["/archives/2019/08/index.html","9f7625521e35993c88c5ffce7f394bee"],["/archives/2019/09/index.html","bd229504e3a0d2427ea64177c831c685"],["/archives/2019/10/index.html","ad9c9dc4ef9c42368cd434cc711ae350"],["/archives/2019/12/index.html","abe97efebc532d41a04e197550601541"],["/archives/2019/index.html","8e7a03ca22358796a27395629875a73e"],["/archives/2019/page/2/index.html","e7c1a6f410162602cdfba0641b57caed"],["/archives/2019/page/3/index.html","aa690c04e4bd4eeddc5512307e1b9106"],["/archives/2020/01/index.html","3c8e5cd1b875813ed33feac2de5f42af"],["/archives/2020/02/index.html","7055a60dde0f505061ba06c0272c9376"],["/archives/2020/04/index.html","1d726ee232cbf5806037d16c516d2711"],["/archives/2020/06/index.html","429c09d22aa48b891d2877333977dd21"],["/archives/2020/07/index.html","8d1d35e422990e8b3fc50f5ce45c3b9a"],["/archives/2020/08/index.html","dadccf202fd4409ce63a370e3d1860d6"],["/archives/2020/11/index.html","d385d93f962b748b5fc7799aec6012b5"],["/archives/2020/index.html","2761c8046bcbf9883e6fda9802b9bda1"],["/archives/index.html","50996acb79e0327bb81d26feda4b1e49"],["/archives/page/2/index.html","00faec9fee30bfad388d0af6c99285a5"],["/archives/page/3/index.html","fcd0365ab3617548a8a41f18584bd6ce"],["/archives/page/4/index.html","bf2948cc587eae9130bb35fe8f65bcbe"],["/archives/page/5/index.html","257cb9c08d954065fd97fc4f6bfa6dcd"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_ugN9m0tqIZ.html","17b52e2a2015cc969ae176f7c845b752"],["/categories/Go/index.html","efa481fd4907d9b6e9f002853a266dc5"],["/categories/OI/Python/index.html","f3dbbd1efcf8946321dd850b4fbaeeba"],["/categories/OI/index.html","4e83ddc7d9a179fa22fedc4d750b5183"],["/categories/OI/page/2/index.html","4f51f3ec3fe899ef62bc4f6f28a99ddb"],["/categories/index.html","67f829a768508d81847dbdd57e5975b0"],["/categories/人工智能/index.html","cc50f0e98717695058c9680ad8034dd5"],["/categories/人工智能/神经网络/index.html","9798470cf19a2979f0f35857db898970"],["/categories/其他/index.html","ff5ad111c05abff06298b6248ef11716"],["/categories/小说/index.html","1fcfbb0fd7feec14b06df9702dbb4b92"],["/categories/线性代数/index.html","492bddd29f4e0194f6ec2f463d73202a"],["/categories/量子计算/Microsoft-Q/index.html","93228989e97b5982aea7988113028b31"],["/categories/量子计算/index.html","b16a4462d752dd4ad86670c9ad0df376"],["/categories/音乐/index.html","c806bea77fe56a48d2b3b71c1e16932b"],["/categories/高中文化课/index.html","aa8235f8770fe87729c782da906742b5"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/index.css","5615e1a2a87e2db5d0b0c38563618a37"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/files/computational-geometry.html","47bccf815bdf7cadd9795db284568d2f"],["/files/software-engineering.html","cbb21309ce4d847340f924070eee6899"],["/googleb531d8ab0be9de8e.html","9a891f19107a994c5a892c1a18797079"],["/img/2018-07-22-blog-02/QR_code.png","0c07a5dd4cff6cbf50c090a76dcdd709"],["/img/2018-08-05-blog-01/QR_code.png","daa3c224e7a21dde030bf07e755fafd4"],["/img/2018-08-05-blog-01/code_style.png","36f0aa4d76682584de63473285ad1a6f"],["/img/2018-08-05-blog-01/decomposition_or_not.png","4979d1c019db961b3ac73e6d8a6bb6c8"],["/img/2018-08-05-blog-01/question1.png","22ae614962171af9690e1234edb052bf"],["/img/2018-08-05-blog-01/question2.png","46f2f446e89b7dc7f223e299fc7a917c"],["/img/2018-08-05-blog-01/question3.png","5162d0d328b3eacb494e61dd1e6f73fa"],["/img/2018-08-05-blog-01/question4.png","d37099d15ec4760d9a1ef7f5181c5c73"],["/img/2018-08-05-blog-01/question5.png","ef9a7cef5c322fc2e8471f2ad89bf18f"],["/img/2018-08-05-blog-01/question6.png","21419a1a2ad79182766c7abc9bd6123f"],["/img/2018-08-27-blog-01/QR_code.png","5eba2bd1aeb97b896d6ae77b8cb0e7ba"],["/img/2018-08-27-blog-01/lxl.png","efebc6fb7f5853a12635883a0d7b6ab1"],["/img/2018-08-27-blog-01/matrix1.png","7de109edd42140dc27e5011de5e9b0d1"],["/img/2018-08-27-blog-01/matrix2.png","1bf48348578a0298d3f94658e60313f3"],["/img/2018-08-27-blog-01/segment_tree.png","98461da0b9737c5afeb67a1651f83ab7"],["/img/2018-08-27-blog-01/segment_tree_binary_search.png","992c7857279dc38d876d2cd26f185b9f"],["/img/2018-08-27-blog-01/the_rank_list.png","77ff1033d1f2aa81d7b2bfcaa1700b20"],["/img/2018-12-01-blog-01/QR_code.png","c5fccb7e39165fb379bfcb4a4e77ffc9"],["/img/2019-01-29-blog-01/QR_code.png","8b93d3911733e8b02ec95cc5af9bea9b"],["/img/2019-01-29-blog-01/nice_table1.png","c5be505055c8d9403f9fa138ac28fe8d"],["/img/2019-01-29-blog-01/nice_table2.png","df54b25606df0670c1106bbe357e10dd"],["/img/2019-01-29-blog-01/nice_table3.png","dbe7a61b9216135fefd0af6a3ad0e1f4"],["/img/2019-01-31-blog-01/QR_code.png","7004a4ee316f05ce74ee455c33183e4b"],["/img/2019-01-31-blog-01/demonstration.png","c5f1e4bf847d673b620961a913ceaf81"],["/img/2019-02-02-blog-01/QR_code.png","9f02194ac23e2e6032570b3a9d3a8956"],["/img/2019-06-04-blog-01/DNA.png","2a77ea64cfd04e15b132f80f04999d98"],["/img/2019-06-04-blog-01/QR_code.png","08c544eff16c10812fc16fcde15c7cb0"],["/img/2019-06-04-blog-01/central_dogma.png","db37c055ab6846436e1abcf217c87135"],["/img/2019-06-04-blog-01/gene.png","2a91ed4e34aff513e95a74f0fb70ced9"],["/img/2019-06-04-blog-01/immunomodulation.png","3665b7d74a4cc7423265106f981d62de"],["/img/2019-06-04-blog-01/note1.png","16206fa09952b9b239a357aa2771d668"],["/img/2019-06-04-blog-01/note2.png","4c3bec126140a7c70e718069f621f58c"],["/img/2019-06-04-blog-01/note3.png","d4256a3193d24d7d62f8cfe92f8d5071"],["/img/2019-06-04-blog-01/note4.png","56fa7cb36b260173067d39a8ea26ba19"],["/img/2019-06-04-blog-01/note5.png","8b604ff720f86c01da7b976b15c8c527"],["/img/2019-06-04-blog-01/note6.png","73364e20333b1cbe59527d7fe0475f56"],["/img/2019-06-04-blog-02/C6H11OH.png","2f8c1b739551ffc7e31ddfb665521ddc"],["/img/2019-06-04-blog-02/C6H12.png","b7877838e57f7687e7deed14e80073d8"],["/img/2019-06-04-blog-02/C6H2X3OH.png","4058848a8bc0622801ec79cb61a2b9a6"],["/img/2019-06-04-blog-02/C6H5CH3.png","0f8da4e3e43f0cb411078b463e5a0333"],["/img/2019-06-04-blog-02/C6H5COOH.png","2388cd824831fae99090de5e17abcd5c"],["/img/2019-06-04-blog-02/C6H5OH.png","6d82014f8f772119e29722027e6ac9f0"],["/img/2019-06-04-blog-02/C6H6.png","b0bdc2a08e48a93746a616bf3d418606"],["/img/2019-06-04-blog-02/CHCOH.png","d28a12ebe6c08b15dd35f2c4a47d8dae"],["/img/2019-06-04-blog-02/H2SO3.png","6ef9f3ceda36fe1e00b02b0d4ca59d5a"],["/img/2019-06-04-blog-02/H2SO4.png","3d5a58581865a0ba4246c2fcee60ed52"],["/img/2019-06-04-blog-02/QR_code.png","59f5a75999b3c746731fbce93f01ca36"],["/img/2019-06-04-blog-02/SO2.png","3fb9c401069885bd5646ded5013c7478"],["/img/2019-06-04-blog-02/atom_layout.png","e11c3fdbe5dd4c2a755cd31ecdee5cea"],["/img/2019-06-04-blog-02/dryer.png","993c0b8db1973047572cc87602b66f22"],["/img/2019-06-04-blog-02/electron_layout.png","cae7b5b2903c45afb7b4b5f50eaa6b81"],["/img/2019-06-04-blog-02/table1.png","ec78727cbf18e1acc08fc386f292f6e4"],["/img/2019-06-04-blog-02/table2.png","5b579b8ae3d31d7e46b450c745c14d48"],["/img/2019-06-04-blog-03/QR_code.png","826308a6740a05e8c6bc3af3667fd549"],["/img/2019-06-04-blog-03/chords_theorem.png","b22215b37b872970d51eca71410e5a34"],["/img/2019-06-04-blog-03/note1.png","06ad17a23fa021e01699b78ed43ea94f"],["/img/2019-06-04-blog-03/note2.png","bb1180b6ce2f8fad56164e8516e3eabf"],["/img/2019-06-04-blog-03/note3.png","bc15eedf10e0c46735d346bb88bc41e1"],["/img/2019-06-04-blog-03/note4.png","3c1d92c5481d2246f61187b3d4cd52e3"],["/img/2019-06-04-blog-03/parabola.png","1121724abda9fe149b6946b600dbb2d8"],["/img/2019-06-04-blog-03/parallelogram.png","3f437f0014735aaaa461cc0b3cfa6f14"],["/img/2019-06-04-blog-03/projection_theorem.png","be85e0baed9daafb42a138a2d791a202"],["/img/2019-06-04-blog-03/trigonometric_lines.jpg","e2654a761baf432dc261ae4269897e90"],["/img/2019-06-04-blog-04/QR_code.png","22d691a12aeb2e89d99b0ccc775e85be"],["/img/2019-06-04-blog-04/alpha.png","5c048128846d7d5b3f967284df0cf2d5"],["/img/2019-06-04-blog-04/beta.png","835b0e3e6e67b0e51adf874f9261fccd"],["/img/2019-06-04-blog-04/magnetic_focusing.png","5db18c944e006daeeb29478aa3732c1a"],["/img/2019-06-04-blog-04/micrometer.png","b4b36ba145faa1820d681b5a3d375737"],["/img/2019-06-04-blog-04/note1.png","1832064024a724f73e64744ba5dd55fd"],["/img/2019-06-04-blog-04/note2.png","6d92a455fe58223725af7786bcf5f527"],["/img/2019-06-04-blog-04/note3.png","c90e917937b3f65bf56680d1ec36f6a5"],["/img/2019-06-04-blog-04/note4.png","c90e917937b3f65bf56680d1ec36f6a5"],["/img/2019-06-04-blog-04/note5.png","83e56b0e527111b714adfd20e1d4399e"],["/img/2019-06-04-blog-04/note6.png","6af6c346e11a26e1044b1fd338a37627"],["/img/2019-06-04-blog-04/note7.png","081c27e45a36e347b5d7853afb197438"],["/img/2019-06-04-blog-04/table1.png","b066422741e9953abf4520e882c7fe5f"],["/img/2019-06-04-blog-04/table2.png","4209e606c789ad1a465da5d5779e2ff1"],["/img/2019-06-04-blog-04/vernier_caliper.png","a8c720cc92c83c60e7088b3b8535ad4c"],["/img/2019-06-12-blog-01/QR_code.png","8badfabeb53f15eeb444923fb335c4dc"],["/img/2019-06-12-blog-01/UOJ_votes.png","e653c43f779c88d281b87510b1adba93"],["/img/2019-06-12-blog-01/demonstration.png","59805cf559d19b3727d562e5d2052e5c"],["/img/2019-06-12-blog-01/grid1.png","3a57eb2209a63cef402630c6fa6d4462"],["/img/2019-06-12-blog-01/skew1.png","29a165bdf21e4f0fe7e228353977a6df"],["/img/2019-06-12-blog-01/skew2.png","32252064b28d28517cdccd17ab073504"],["/img/2019-06-12-blog-01/skew3.png","41a679559e70505ac67f5a623f9636a0"],["/img/2019-06-12-blog-01/skew4.png","d90513001602da4132f48622d93b9326"],["/img/2019-06-12-blog-01/skew5.png","4271173353f3841ea1490e44e3e5d795"],["/img/2019-06-12-blog-01/skew6.png","68c52e30f432baacb9372745d11c1ee0"],["/img/2019-06-12-blog-01/skew7.png","a10e615773d1adcb54095163cf294f42"],["/img/2019-06-12-blog-01/skew8.png","956b6396c6970089adc362c90eef8abf"],["/img/2019-06-12-blog-01/skew9.png","092d88cdddc9177f8d9d03f38ab95e05"],["/img/2019-06-12-blog-01/zhenxiang.png","0c7532c65a043332b2967665caf417c7"],["/img/2019-07-10-blog-01/QR_code.png","55658311b8ea6bc8f451381ed4f1e341"],["/img/2019-07-14-blog-01/QR_code.png","f7fd7e2c4d2dec7d47f3c21501982c0e"],["/img/2019-07-14-blog-02/QR_code.png","1ca66a19d88010ddf8b1e7b07b21496c"],["/img/2019-07-27-blog-01/QR_code.png","99f01033c3f80e24426f5204df112937"],["/img/2019-08-02-blog-01/QR_code.png","4d0874cbca785421b48965b6f7c61b5e"],["/img/2019-08-04-blog-01/QR_code.png","b72cf3db53fa3a91259c2dd094ec9286"],["/img/2019-08-04-blog-01/Richardson.png","7bfa18929ea2d9bdb43dc92de55211ee"],["/img/2019-08-04-blog-01/Shanks.png","8184d6ee73bf24cfd714060407de6275"],["/img/2019-08-13-blog-01/QR_code.png","21780fba675279b7e9374f9031f5e2e9"],["/img/2019-08-13-blog-01/SAMSA.png","d40ec247c8d85293239902e9366decb8"],["/img/2019-08-13-blog-01/SuffixTree.png","80e1ab0eda16742f1d6a9ca80153a4ec"],["/img/2019-08-13-blog-01/what.jpg","979770a136f1ca2f7e1b4f91be54cd56"],["/img/2019-08-18-blog-01/QR_code.png","700d6fc8bfb57d760053b24737e8b1d4"],["/img/2019-08-18-blog-01/ST1.png","c895c0080bc03995f4fb4055d3071b2c"],["/img/2019-08-18-blog-01/ST2.png","b3d0cf1acb16be22f44142b6769a8586"],["/img/2019-08-18-blog-01/ST3.png","eb0c55fb0300d8712323b20c3edac2d8"],["/img/2019-08-18-blog-01/ST4.png","cc1be0e7b7ce6178b56c72240be5ab84"],["/img/2019-08-18-blog-01/ST5.png","cd87a087d154ddf71ac86562b825410b"],["/img/2019-08-18-blog-01/SuffixTree.png","f5d847eeeb669b537a59d06d3a6026de"],["/img/2019-08-18-blog-01/why.png","9d13a8a24f4426b5fcdb67671ab37ca0"],["/img/2019-08-25-blog-01/31.png","38ee6abed7e55a50ae9797f359c094bb"],["/img/2019-08-25-blog-01/32.png","7a14923e181c6d288ec2a6df28984b37"],["/img/2019-08-25-blog-01/41.png","e7da6f7d3bce8a1c1a48bc35c7eaacd5"],["/img/2019-08-25-blog-01/42.png","abae3486cf63df60ee44546f50c54b9c"],["/img/2019-08-25-blog-01/4b.png","a43c2d168d542ac6c7d6abf8c11a00e0"],["/img/2019-08-25-blog-01/4p.png","4bd158837464569938b5f2a9e621f8ac"],["/img/2019-08-25-blog-01/QR_code.png","448cf5827e84e74f671a958ae58653fc"],["/img/2019-08-29-blog-01/1.png","28bf977524a5e61a9dc5801a89c2ff59"],["/img/2019-08-29-blog-01/10.png","bb50fc7a8bbe82a9e59a3ef6e80cc45a"],["/img/2019-08-29-blog-01/QR_code.png","f9d40bceeb824791b0787265ece6f216"],["/img/2019-09-24-blog-01/QR_code.png","a10fe1474edc080b4a6f8dd2e76c8809"],["/img/2019-10-24-blog-01/QR_code.png","57a6c1add21ff0e204c858851569bbc8"],["/img/2019-10-24-blog-01/gugugug.gif","b7b62c976eb995d73658dde68629eb7f"],["/img/2019-12-08-blog-01/QR_code.png","5c8ca61c685c7f76658ef5d1f07f38fb"],["/img/2019-12-16-blog-01/QR_code.png","abd5f71efd3d1a6c6bb5f2657253006b"],["/img/2019-12-21-blog-01/QR_code.png","8fb10a575a5de135e54c73fe79e8d105"],["/img/2019-12-28-blog-01/QR_code.png","e210e618111b2bd8522cbb5e3176407e"],["/img/2020-01-12-blog-01/6.png","93dc8df5d22ff948ff66ec961271b567"],["/img/2020-01-12-blog-01/Embarked.png","fc2b50b28155e2749ecf13eaa7a25239"],["/img/2020-01-12-blog-01/Fare.png","f66d4f07968561338f2322a9cd58950b"],["/img/2020-01-12-blog-01/QR_code.png","b469f2ea2c7ac4073275dbbde4154848"],["/img/2020-01-12-blog-01/data.png","476178a361e25607478d314d53502c51"],["/img/2020-01-12-blog-01/submission10.png","6678ce70707537b77ce72acee3ed4d9c"],["/img/2020-01-14-blog-01/GG.png","fc261d5ed12e814e87fa9091c1c12743"],["/img/2020-01-14-blog-01/LRN.png","e565e4931d05a6e6f51c533cad591124"],["/img/2020-01-14-blog-01/QR_code.png","707c502fcbc5173982b56b32d348194a"],["/img/2020-01-14-blog-01/Result.png","37a47b035ef808405e4d9f8ce3d5474d"],["/img/2020-01-14-blog-01/VGG.png","c70c85d4398163eda6c2991c7e16f076"],["/img/2020-01-14-blog-01/VGG13.png","e04bae643c8fe1b6d969b7922928cff7"],["/img/2020-02-13-blog-01/QR_code.png","7bc36dc39794a53157453b051b1f656b"],["/img/2020-02-13-blog-01/binary.png","79efb6c5296310ccdd1ff351493539da"],["/img/2020-02-13-blog-01/blurred.png","4b1864c5e7ad11d1452ab58174a1d43e"],["/img/2020-02-13-blog-01/bounding_box.png","703e17c67c20824ba66092aa6eb13a7a"],["/img/2020-02-13-blog-01/closed.png","3414b8f9181b7c24b5e26f2e16c87840"],["/img/2020-02-13-blog-01/contour.png","b60c50187222eec077a049313e629bc3"],["/img/2020-02-13-blog-01/edges.png","3d1ac728afe0d4d5034910ee888368d9"],["/img/2020-02-13-blog-01/id.png","41d832b36204ff2f9b246e1e70d2a877"],["/img/2020-02-13-blog-01/inverted.png","f2206ee4ab8b5641583fc2a6d5ecebdf"],["/img/2020-02-13-blog-01/lines.png","3b0082f5fe2d7acc68c300ab706cbcc3"],["/img/2020-02-13-blog-01/lines_sorted.png","cd99804d7e5f5cb0ae45cdc49de1e07a"],["/img/2020-02-13-blog-01/normalized.png","567ed680aec7fd90b14b0a70d8b8418d"],["/img/2020-02-13-blog-01/opened.png","103e3f0685fe6ecf383abf7f56b99ff2"],["/img/2020-02-13-blog-01/path.png","3238debdeab4809df4f71592350c4cec"],["/img/2020-02-13-blog-01/points.png","4f564e536657d702b3027bd60cc8ab99"],["/img/2020-02-13-blog-01/sf1.png","dad1f8a0730a6442ecbfcfe63a4b245b"],["/img/2020-02-13-blog-01/sf2.png","9f53512aaed380ae50da9f26a929ca27"],["/img/2020-02-13-blog-01/sf3.png","4659770d5ccc0785225ecd8203d36bdf"],["/img/2020-02-13-blog-01/tesseract.png","9467a51648ffd49a19456d504072850a"],["/img/2020-02-13-blog-01/wjsh.jpg","a725fd06a4460937ef2126edad4bd6a1"],["/img/2020-04-02-blog-01/A.png","67edb7b3d829a66f85a0ed417f4405fd"],["/img/2020-04-02-blog-01/Arnold.png","bd863cafb6ba1704ef5015a50b05bb45"],["/img/2020-04-02-blog-01/B-1.png","16a288a07e8a08b101de61b35843e144"],["/img/2020-04-02-blog-01/B-2.png","e6ae7bd90a2b8eda6650e2d37aa3dda6"],["/img/2020-04-02-blog-01/B.png","009c89479f67f563253ed4488185df04"],["/img/2020-04-02-blog-01/C.png","7b44bee3273a37ae66d4cf3ed6d59107"],["/img/2020-04-02-blog-01/D.png","3dd9525584356ad68b5cb7c8300f466a"],["/img/2020-04-02-blog-01/E.png","eb8a1a994543f2f9f4473f1f1e490bfb"],["/img/2020-04-02-blog-01/F.png","7df327037166efbe549f30d0fa4d62fd"],["/img/2020-04-02-blog-01/G.png","e62486b859faadac29cfba8538d6d4e4"],["/img/2020-04-02-blog-01/H.png","2b6b3916f757528ea85b18228f239c58"],["/img/2020-04-02-blog-01/Language.png","d2ebfdb50ac99f6ba432bb32a8ddecd0"],["/img/2020-04-02-blog-01/Limericks.png","dfa49a1642ff515cc487d81a7091ec58"],["/img/2020-04-02-blog-01/Lingua.png","5b6c7eca6c8c94d97f046f7aeb198305"],["/img/2020-04-02-blog-01/QR_code.png","0727ecc9bfb4d28e4f2260886c6b809d"],["/img/2020-04-02-blog-01/UnknownX.png","574a8b4c38c1aba034ca54441a7e5cb9"],["/img/2020-06-07-blog-01/QR_code.png","fb297627475015340903acaeed6ebdf2"],["/img/2020-07-11-blog-01/Beneath_the_Starlight.jpg","b43d29fa5fadb192e5c1b57bdeb68445"],["/img/2020-07-11-blog-01/QR_code.png","1d237e9258e82e86608722de20d805d4"],["/img/2020-07-19-blog-01/QR_code.png","9ddc1113e4b20b7dc9a797e19b7f0c4e"],["/img/2020-07-19-blog-01/The_Nether_Spark.jpg","f1762bc17361cd7f905202683f588ae1"],["/img/2020-11-29-blog-01/QR_code.png","d641cd296282fe15ecd8d8e5061e92d3"],["/img/2020-11-29-blog-01/The_Pony_In_The_High_Castle.png","cd065f22132c1f9149ba5c324d0e431c"],["/img/Beneath_the_Starlight_16-9.png","ee4d83c9cbbb8cd9171eb7277b5d2317"],["/img/Magolor-OC-trans-avatar.png","ee9d8062ef450b487d05cbe0917544cf"],["/img/Magolor.png","b6e306a5ee6f90083d69f5b30825b84a"],["/img/W_C_presentation/EWG.png","44303ddff3a75bf21732c35ca8dee2a0"],["/img/W_C_presentation/Reich.png","d4d459bbbd582ad7a35fea2fe1937180"],["/img/W_C_presentation/Reich2.png","8154b79ff7288c65399e07cb7f1cf029"],["/img/W_C_presentation/SR.png","4377c87caacdc1a6dcef6091de721287"],["/img/W_C_presentation/UK.png","043b1420168db5ac54bc04b8faf24cc5"],["/img/W_C_presentation/US.png","1548f59244e9fc34a66697c9cffaf6eb"],["/img/W_C_presentation/USSR.png","94ccfff29f7b918f0693aa6444235a5a"],["/img/W_C_presentation/USSR2.png","f895ff4cddd3eab6724cf379d0923c83"],["/img/algorithm_template.jpg","0158ab8cd43664aa519e42db885459f2"],["/img/avatar1.jpg","df5b4065ed9709419e2200c8185d0313"],["/img/bilibili.jpg","49fb3dfbd3d159e3f89b37bd13e5b239"],["/img/cover/AIVA.png","3568829e7a6306bd69800f8e2109c7b9"],["/img/cover/Beneath_the_Starlight.png","3c834373b0d1b23fdcf942846528ade7"],["/img/data_structures/51Nod1598.png","99b6edca92d0f5e52ab95f8ea67a2d52"],["/img/data_structures/BZOJ1500.jpg","2b93578fa0c99ddcff716fdc5377a330"],["/img/data_structures/BZOJ3224.png","fd07a970063c77b75b85528738c3bc0a"],["/img/data_structures/CF1017D.png","31cfa141e338a32dc885e20e93975391"],["/img/data_structures/Giveup.jpg","37e2722cc7664af3f87e9b2c44b721a8"],["/img/data_structures/ORZJRYI.png","c498c48162c2aa8c00314e7943a6f4c9"],["/img/data_structures/WTF.gif","2d6a91c18a969c7211f76253bd17277c"],["/img/data_structures/WTF2.jpg","403c3bbd75f75866cb428ccbbe05562a"],["/img/data_structures/hly1.png","c37cc6a15bc490d69fa75f9d67170699"],["/img/data_structures/hly2.png","5cb7c5781f40005ef10f2df769a6204f"],["/img/data_structures_2/51Nod1598.png","99b6edca92d0f5e52ab95f8ea67a2d52"],["/img/data_structures_2/BZOJ1018_1.png","e4360b9f198878cd212c322a413567a4"],["/img/data_structures_2/BZOJ1018_2.png","30018c9c6e4b6260f8e8c26b3630abdb"],["/img/data_structures_2/BZOJ1018_3.png","3353c289d2b6411d145663ee3915f792"],["/img/data_structures_2/BZOJ1500.jpg","2b93578fa0c99ddcff716fdc5377a330"],["/img/data_structures_2/BZOJ3224.png","fd07a970063c77b75b85528738c3bc0a"],["/img/data_structures_2/BZOJ4869.png","150455c81b34f815aff027a02d5a6db3"],["/img/data_structures_2/BZOJ4911.png","afc3b45e115203115e29fc9dda7d6ee2"],["/img/data_structures_2/BZOJ5020_1.png","d149b84a42a6ff7b363e98ea38d2bbce"],["/img/data_structures_2/BZOJ5020_2.png","2e6e9f613f7164ff7255a87cfb78d4fe"],["/img/data_structures_2/BZOJ5210_1.png","7532acb1b849029a206c65a5ea566f51"],["/img/data_structures_2/BZOJ5210_2.png","11da553043f42b70cf59173371663239"],["/img/data_structures_2/FWT.png","cef6a6043d5297a51964e9eb9a059c98"],["/img/data_structures_2/Giveup.jpg","37e2722cc7664af3f87e9b2c44b721a8"],["/img/data_structures_2/HDU5669.png","d463f47cb93e3f7aeb91aa719a25d014"],["/img/data_structures_2/ORZJRYI.png","c498c48162c2aa8c00314e7943a6f4c9"],["/img/data_structures_2/UOJ195.png","264667013745a2a0756dd8052e6fc670"],["/img/data_structures_2/UOJ276.png","1084d7e57eee8e069b7180f4af36669c"],["/img/data_structures_2/WTF.gif","2d6a91c18a969c7211f76253bd17277c"],["/img/data_structures_2/WTF2.jpg","403c3bbd75f75866cb428ccbbe05562a"],["/img/netease.jpg","3c2247a857108ca0d10ab80a87b3e722"],["/img/number_theory/CRT.png","6668e6509c4137d03bf89fbaf55cd697"],["/img/number_theory/EXCRT.png","8c92ddc6cbfb2b316a793259963cb60f"],["/img/number_theory/Euclid1.png","108296522b8ec1ee5c1db8048bade022"],["/img/number_theory/Euclid2.png","60248e0a9c4f8beb1dfb6bd30c6bcf09"],["/img/number_theory/ExEuler.png","099be31ed2deb2cea739477bccdde053"],["/img/number_theory/Grid1.png","0ab5b90fadbc699edf2d8bb6f973347a"],["/img/number_theory/Grid2.png","6fe08ae5c49d7dbf1cff57b1502f3b83"],["/img/number_theory/Grid3.png","f415d8dca73542948b16e2cb0d5d9924"],["/img/number_theory/LOJ6392.png","e5bf0fc8f088e67b455703073214e014"],["/img/number_theory/LOJ6392_ans.jpg","215dc6815b5c0a2e81fa6801d17c7a15"],["/img/number_theory/Legendre.png","9cf2018aed74eee3ae557bade1a57716"],["/img/number_theory/Lucas.png","23e4e84ac2b9048f0d136e0723d3d12a"],["/img/number_theory/Reciprocity.png","b41238bf50e61595cc2018beaf4e138c"],["/img/number_theory/UOJ300.png","18af4e5ff2c5f2286cc795b0a27aedeb"],["/img/number_theory/functions.png","f3a5a31bf28db69007994ce89d436950"],["/img/problem_archive.jpg","69fbc7f3ab3f2656ade34a85ad0c6047"],["/img/protocols_security/7vs4.png","861b31cc1f5d19a571ad75fadd1f41ef"],["/img/protocols_security/TCP_retransmission.png","2e5823b2dc44b83f59e1656987653bdd"],["/img/protocols_security/layers_of_the_internet.png","ea4ab1043b2e508efbd75cf7a2ae09e4"],["/index.html","ef970c17ff6abc9962e42e304ec22608"],["/js/bai.js","1ecdeb59a1feacee270e524ac8b37fe8"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/msc/Cloud/README.html","66424ec33ec0ee702870a07cbe8cb99d"],["/page/2/index.html","0b49c6453e05fb4a98ad3357c3f7371c"],["/page/3/index.html","9bc004dde181b1ff4967329930725c4a"],["/page/4/index.html","b21bac9c181647ec9a393b49fd4b9a87"],["/page/5/index.html","2342a5833016944f24fdba619c7a3a1d"],["/slides/index.html","b9429d66d0903478bc42e9a296a70f48"],["/tags/BSGS/index.html","b0bd33c73444da194e3e7ae6aeb02816"],["/tags/Codeforces/index.html","866058835c1d44d99eebdf3d63ffdab3"],["/tags/DP/index.html","7f987c2762762b785ea092722eaf4989"],["/tags/Dilworth定理/index.html","f8bd2b4e05335ddae63ed50fb91a858f"],["/tags/Go/index.html","e1bdaff708c28434b641abdcc036b11a"],["/tags/Kaggle/index.html","aad96420ea9fd5486f6602364b9af701"],["/tags/OCR/index.html","759e635572e222805cc73768efbba136"],["/tags/OI资源/index.html","65fd5754971566c1f9d8130b11119484"],["/tags/OI资源/page/2/index.html","5f43d5c990b7d17015004a4390ee367c"],["/tags/PyTorch/index.html","2b29fa9f55a7ebf0b96de4fd88339a42"],["/tags/Python/index.html","8628da194c645aa46c1d1a43f6727282"],["/tags/Richardson外推法/index.html","9b7511852436c3b457a324a44a47d1e0"],["/tags/Shanks变换/index.html","be6fa3cf4166c16b837143cbd0e1a9a9"],["/tags/index.html","248cb35e542c289c2bffe6792cebf118"],["/tags/二分/index.html","17269df6dfcd04df724591261b1f3835"],["/tags/人工智能/index.html","b479d16de6b828da6df55b76c97a2ec8"],["/tags/分块/index.html","6694eb21f10f483ec28988312e6be1f1"],["/tags/化学/index.html","b998b235bb52e5a4fa4be8e6605e70f4"],["/tags/单调指针/index.html","469bb902f831539e9c38c3caf1eed031"],["/tags/双曲函数/index.html","c8506edec5cf45bd0d55fb8edcddc2f1"],["/tags/后缀数组/index.html","ae90d2cfe94bbd34afb122dac6e50b8f"],["/tags/后缀树/index.html","5d4d0a049ec4638d2092e8e4e22168ce"],["/tags/图像处理/index.html","1c4ac311b95c45dff22acf3d42670ecc"],["/tags/小说/index.html","a42c80026bad13160748ad7e1779d5dc"],["/tags/微积分/index.html","a91a1e749e0ab2f36e0193827a5d9c53"],["/tags/数学/index.html","359a149c07251b6a914653231c7ed4cc"],["/tags/数论/index.html","240ddde5184a6d9f66b57b2756bc5681"],["/tags/机器学习/index.html","dc9beb005e0ced298e32476247575d40"],["/tags/杂文/index.html","5c68501a0ef7477cb1902689390ac50f"],["/tags/树状数组/index.html","4b87ec2984feb796dd7537cc15b2f2aa"],["/tags/概率/index.html","1615b33436874efa2bb0f3c488fe6d13"],["/tags/物理/index.html","7b35307b8be184828ed255b0485a1845"],["/tags/生物/index.html","a35470fc620dc0a5c2d3d3faf068b812"],["/tags/矩阵/index.html","15acf1156526ed10c73b6d7b2355fbac"],["/tags/神经网络/index.html","f81a331bfde952003f4c16f212c259ed"],["/tags/级数求和/index.html","c82a0a121776a240f843d5f584b2a9c2"],["/tags/线性代数/index.html","8885bca18c335f5ea76962f5f10a5c25"],["/tags/线段树/index.html","7aaccbdde76da46f14e59282a500cdcf"],["/tags/虚树/index.html","9fe44ac588cec4f68dc19ed9375e8540"],["/tags/计算几何/index.html","3f614b8051da8d89e973839a3cba022c"],["/tags/质数筛/index.html","074a9b5edbda2c51ab3f573855e50e20"],["/tags/贪心/index.html","a8d71b7b533742deecf6ad031c7eb907"],["/tags/量子计算/index.html","5b6f45fcd12ba54f543981b425044fb2"],["/tags/链分治-动态DP/index.html","6c91825a2b1bf7655f17f9db2c04f0bc"],["/tags/音乐/index.html","d4856f0e5018b955c02982119c8ca7e2"],["/tags/高中文化课/index.html","3b100e60cc94fc88b50320c7a85b5170"],["/tags/高斯消元/index.html","6d47c2bcbf670a80b8517a968a1a8da7"],["/tags/黑科技/index.html","e56952853a83d5c726baf76a29256a2b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
