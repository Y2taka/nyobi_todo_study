'use strict';
// key: タスクの文字列 value: 完了しているかの真偽値
const tasks = new Map();

/**
 * TODOを追加する
 * @param {string} task
 */
function todo(task){
    tasks.set(task, false);
}

/**
 * タスクと完了したかどうかが含まれる配列を受け取り、完了したかを返す
 * @param {array} taskAndIsDonePair
 * @returns {boolean} 完了したかどうか
 */
function isDone(taskAndIsDonePair){
    return taskAndIsDonePair[1];
}

/**
 * タスクと完了したかどうかが含まれる配列を受け取り、完了してないかを返す
 * @param {array} taskAndIsDonePair
 * @returns {boolean} 完了してないか
 */
function isNotDone(taskAndIsDonePair){
    return !isDone(taskAndIsDonePair);
}

/**
 * 未完了のTODOリストの配列を取得する
 * @returns {array}
 */
function list(){
    return Array.from(tasks)
        .filter(isNotDone)
        .map(t => t[0]);
}

/**
 * 未完了のTODOを完了状態にする
 * @param {string} task
 */
function done(task){
    if(tasks.has(task)){
        tasks.set(task, true);
    }
}

/**
 * 完了状態のTODOリストの配列を取得する
 * @returns {array} 
 */
function donelist(){
    return Array.from(tasks)
            .filter(isDone)
            .map(t => t[0]);
}

/**
 * TODOを削除する
 * @param {string} task
 */
function del(task){
    if(tasks.has(task)){
        tasks.delete(task);
    }
}

module.exports = {
    todo, 
    list, 
    done, 
    donelist,
    del
};