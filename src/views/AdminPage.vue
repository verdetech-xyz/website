<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Admin Header -->
    <header class="bg-green-600 shadow-lg">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <h1 class="text-white text-2xl font-bold">VerdeTech Admin</h1>
          </div>
          <div class="flex space-x-4">
            <button class="text-white hover:bg-green-700 px-3 py-2 rounded-md">Notificações</button>
            <button class="text-white hover:bg-green-700 px-3 py-2 rounded-md">Perfil</button>
            <button class="bg-red-500 text-white hover:bg-red-600 px-3 py-2 rounded-md">Sair</button>
          </div>
        </div>
      </div>
    </header>

    <!-- Admin Content -->
    <div class="container mx-auto px-6 py-8">
      <div class="flex flex-col md:flex-row">
        <!-- Sidebar -->
        <div class="w-full md:w-1/4 mb-8 md:mb-0">
          <div class="bg-white rounded-lg shadow-md p-6">
            <div class="mb-8">
              <h2 class="text-xl font-semibold text-gray-700 mb-4">Menu Principal</h2>
              <ul class="space-y-2">
                <li>
                  <a href="#dashboard" class="block text-green-600 hover:bg-green-50 px-4 py-2 rounded-md">Dashboard</a>
                </li>
                <li>
                  <a href="#users" class="block text-gray-700 hover:bg-green-50 px-4 py-2 rounded-md">Usuários</a>
                </li>
                <li>
                  <a href="#settings" class="block text-gray-700 hover:bg-green-50 px-4 py-2 rounded-md">Configurações</a>
                </li>
                <li>
                  <a href="#analytics" class="block text-gray-700 hover:bg-green-50 px-4 py-2 rounded-md">Analytics</a>
                </li>
                <li>
                  <a href="#content" class="block text-gray-700 hover:bg-green-50 px-4 py-2 rounded-md">Gerenciar Conteúdo</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="text-xl font-semibold text-gray-700 mb-4">Sistema</h2>
              <ul class="space-y-2">
                <li>
                  <a href="#logs" class="block text-gray-700 hover:bg-green-50 px-4 py-2 rounded-md">Logs do Sistema</a>
                </li>
                <li>
                  <a href="#backup" class="block text-gray-700 hover:bg-green-50 px-4 py-2 rounded-md">Backup</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="w-full md:w-3/4 md:pl-8">
          <!-- Dashboard Section -->
          <section id="dashboard" class="mb-12">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
            
            <!-- Stats Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex items-center">
                  <div class="p-3 rounded-full bg-green-100 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-gray-500 text-sm">Usuários</h3>
                    <p class="text-2xl font-semibold text-gray-800">1,257</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex items-center">
                  <div class="p-3 rounded-full bg-blue-100 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-gray-500 text-sm">Novos Hoje</h3>
                    <p class="text-2xl font-semibold text-gray-800">37</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex items-center">
                  <div class="p-3 rounded-full bg-yellow-100 text-yellow-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-gray-500 text-sm">Visualizações</h3>
                    <p class="text-2xl font-semibold text-gray-800">14,893</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex items-center">
                  <div class="p-3 rounded-full bg-purple-100 text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-gray-500 text-sm">Conversões</h3>
                    <p class="text-2xl font-semibold text-gray-800">328</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Activity Chart -->
            <div class="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 class="text-xl font-semibold text-gray-700 mb-4">Atividade do Usuário</h3>
              <div class="h-64 flex items-end space-x-2">
                <div v-for="(value, index) in activityData" :key="index" class="relative h-full flex-1">
                  <div 
                    class="absolute bottom-0 w-full bg-green-500 rounded-t-sm transition-all duration-300"
                    :style="{ height: `${value}%` }"
                  ></div>
                </div>
              </div>
              <div class="flex justify-between mt-4 text-sm text-gray-500">
                <span>Seg</span>
                <span>Ter</span>
                <span>Qua</span>
                <span>Qui</span>
                <span>Sex</span>
                <span>Sáb</span>
                <span>Dom</span>
              </div>
            </div>
          </section>
          
          <!-- Users Section -->
          <section id="users" class="mb-12">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Usuários</h2>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <div class="p-6">
                <div class="flex justify-between items-center mb-4">
                  <h3 class="text-xl font-semibold text-gray-700">Lista de Usuários</h3>
                  <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Adicionar Usuário</button>
                </div>
                <div class="overflow-x-auto">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Função</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr v-for="(user, index) in users" :key="index">
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              {{ user.name.charAt(0) }}
                            </div>
                            <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">{{ user.name }}</div>
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900">{{ user.email }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900">{{ user.role }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span 
                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                            :class="{
                              'bg-green-100 text-green-800': user.status === 'Ativo',
                              'bg-red-100 text-red-800': user.status === 'Inativo',
                              'bg-yellow-100 text-yellow-800': user.status === 'Pendente'
                            }"
                          >
                            {{ user.status }}
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button class="text-indigo-600 hover:text-indigo-900 mr-3">Editar</button>
                          <button class="text-red-600 hover:text-red-900">Remover</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          
          <!-- Settings Section -->
          <section id="settings" class="mb-12">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Configurações do Site</h2>
            <div class="bg-white rounded-lg shadow-md p-6">
              <form @submit.prevent="saveSettings">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nome do Site</label>
                    <input 
                      type="text" 
                      v-model="settings.siteName"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email de Contato</label>
                    <input 
                      type="email" 
                      v-model="settings.contactEmail"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Idioma Padrão</label>
                    <select 
                      v-model="settings.defaultLanguage"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="pt">Português</option>
                      <option value="en">Inglês</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Tema</label>
                    <select 
                      v-model="settings.theme"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="light">Claro</option>
                      <option value="dark">Escuro</option>
                      <option value="auto">Automático</option>
                    </select>
                  </div>
                </div>
                
                <div class="mb-6">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Descrição do Site</label>
                  <textarea 
                    v-model="settings.siteDescription"
                    rows="4"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div class="mb-6">
                  <h3 class="text-lg font-medium text-gray-700 mb-3">Configurações de Segurança</h3>
                  <div class="space-y-4">
                    <div class="flex items-center">
                      <input 
                        type="checkbox" 
                        id="enableTwoFactor" 
                        v-model="settings.enableTwoFactor"
                        class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      >
                      <label for="enableTwoFactor" class="ml-2 block text-sm text-gray-700">Habilitar autenticação de dois fatores</label>
                    </div>
                    <div class="flex items-center">
                      <input 
                        type="checkbox" 
                        id="requireStrongPasswords" 
                        v-model="settings.requireStrongPasswords"
                        class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      >
                      <label for="requireStrongPasswords" class="ml-2 block text-sm text-gray-700">Exigir senhas fortes</label>
                    </div>
                    <div class="flex items-center">
                      <input 
                        type="checkbox" 
                        id="enableSSL" 
                        v-model="settings.enableSSL"
                        class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      >
                      <label for="enableSSL" class="ml-2 block text-sm text-gray-700">Forçar conexão SSL</label>
                    </div>
                  </div>
                </div>
                
                <div class="flex justify-end space-x-4">
                  <button 
                    type="button"
                    class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Cancelar
                  </button>
                  <button 
                    type="submit"
                    class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Salvar Alterações
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
  data() {
    return {
      activityData: [45, 65, 35, 75, 30, 55, 40],
      users: [
        { name: 'Ana Silva', email: 'ana.silva@email.com', role: 'Administrador', status: 'Ativo' },
        { name: 'Carlos Oliveira', email: 'carlos.oliveira@email.com', role: 'Editor', status: 'Ativo' },
        { name: 'Mariana Santos', email: 'mariana.santos@email.com', role: 'Usuário', status: 'Inativo' },
        { name: 'Pedro Almeida', email: 'pedro.almeida@email.com', role: 'Usuário', status: 'Pendente' },
        { name: 'Juliana Costa', email: 'juliana.costa@email.com', role: 'Editor', status: 'Ativo' }
      ],
      settings: {
        siteName: 'VerdeTech Solutions',
        contactEmail: 'contato@verdetech.com.br',
        defaultLanguage: 'pt',
        theme: 'light',
        siteDescription: 'VerdeTech é uma consultoria global de tecnologia especializada em soluções Vue.js e Laravel para empresas em todo o mundo.',
        enableTwoFactor: true,
        requireStrongPasswords: true,
        enableSSL: true
      }
    }
  },
  methods: {
    saveSettings() {
      // Aqui seria implementada a lógica para salvar as configurações
      alert('Configurações salvas com sucesso!');
    }
  }
}
</script>

